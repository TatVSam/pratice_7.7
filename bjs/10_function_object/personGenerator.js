const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Марина",
            "id_3": "Светлана",
            "id_4": "Анна",
            "id_5": "Надежда",
            "id_6": "Екатерина",
            "id_7": "Елена",
            "id_8": "Наталья",
            "id_9": "Александра",
            "id_10": "Мария"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Андреевич",
            "id_2": "Федорович",
            "id_3": "Георгиевич",
            "id_4": "Сергеевич",
            "id_5": "Владимирович",
            "id_6": "Павлович",
            "id_7": "Александрович",
            "id_8": "Алексеевич",
            "id_9": "Денисович",
            "id_10": "Владиславович"
        }
    }`,
    
    monthGenitiveJson: `{
        "count": 10,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"

        }
    }`,

    maleProfessionJson: `{
        "count": 10,
        "list": {     
            "id_1": "столяр",
            "id_2": "программист",
            "id_3": "учитель",
            "id_4": "шахтер",
            "id_5": "спортсмен",
            "id_6": "водитель",
            "id_7": "менеджер",
            "id_8": "музыкант",
            "id_9": "юрист",
            "id_10": "солдат"
        }
    }`,

    femaleProfessionJson: `{
        "count": 10,
        "list": {     
            "id_1": "медсестра",
            "id_2": "программист",
            "id_3": "учитель",
            "id_4": "воспитатель",
            "id_5": "дизайнер",
            "id_6": "врач",
            "id_7": "менеджер",
            "id_8": "музыкант",
            "id_9": "юрист",
            "id_10": "секретарь"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    
    isLeapYear: function (year) {

        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            return true;
        } else {
            return false;
        }
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        
        const randomGender = this.randomIntNumber(1,0) === 1 ? this.GENDER_FEMALE : this.GENDER_MALE;
        return randomGender;
 
     },
 
    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) return this.randomValue(this.firstNameMaleJson)
        else
        return this.randomValue(this.firstNameFemaleJson)

    },

    randomSurname: function() {
        if (this.person.gender === this.GENDER_MALE) return this.randomValue(this.surnameJson)
        else
        return `${this.randomValue(this.surnameJson)}a`

    },

    randomSurname: function() {
        if (this.person.gender === this.GENDER_MALE) return this.randomValue(this.surnameJson)
        else
        return `${this.randomValue(this.surnameJson)}a`

    },

    randomPatronymic: function() {
        if (this.person.gender === this.GENDER_MALE) return this.randomValue(this.patronymicJson)
        else return `${this.randomValue(this.patronymicJson).slice(0, -2)}на`
    },

    randomBirthDate: function() {
        let resDate = this.randomValue(this.monthGenitiveJson);
         
                
        if (["января", "марта", "мая", "июля", "августа", "октября", "декабря"].includes(resDate)) 
            return `${this.randomIntNumber(31,1)} ${resDate}`
        else if ((resDate === "февраля") && (this.isLeapYear(this.person.birthYear)))
            return `${this.randomIntNumber(29,1)} ${resDate}`
        else if (resDate === "февраля")
            return `${this.randomIntNumber(28,1)} ${resDate}`
        else
            return `${this.randomIntNumber(30,1)} ${resDate}`

    },

    randomBirthYear: function() {

        return this.randomIntNumber(2021, 1940);

    },

    randomProfession: function() {
        if (this.person.gender === this.GENDER_MALE) return this.randomValue(this.maleProfessionJson)
        else return this.randomValue(this.femaleProfessionJson)
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthDate = this.randomBirthDate();
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};

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
        "count": 15,
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
            "id_10": "Андрей",
            "id_11": "Вадим",
            "id_12": "Сергей",
            "id_13": "Алексей",
            "id_14": "Денис",
            "id_15": "Валерий"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 15,
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
            "id_10": "Мария",
            "id_11": "Людмила",
            "id_12": "Татьяна",
            "id_13": "Оксана",
            "id_14": "Ирина",
            "id_15": "Дарья"
            
        }
    }`,
    patronymicJson: `{
        "count": 15,
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
            "id_10": "Владиславович",
            "id_11": "Вадимович",
            "id_12": "Дмитриевич",
            "id_13": "Васильевич",
            "id_14": "Николаевич",
            "id_15": "Всеволодович"
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
            "id_1": "Столяр",
            "id_2": "Программист",
            "id_3": "Учитель",
            "id_4": "Бизнесмен",
            "id_5": "Спортсмен",
            "id_6": "Водитель",
            "id_7": "Менеджер",
            "id_8": "Музыкант",
            "id_9": "Юрист",
            "id_10": "Военный"
        }
    }`,

    femaleProfessionJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Программист",
            "id_3": "Учитель",
            "id_4": "Воспитатель",
            "id_5": "Дизайнер",
            "id_6": "Врач",
            "id_7": "Менеджер",
            "id_8": "Музыкант",
            "id_9": "Юрист",
            "id_10": "Секретарь"
        }
    }`,

    GENDER_MALE: 'Мужской',
    GENDER_FEMALE: 'Женский',

    //Проверка на високосный год (количество дней в феврале)
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
        if (this.person.gender === this.GENDER_MALE) 
            return this.randomValue(this.firstNameMaleJson)
        else
            return this.randomValue(this.firstNameFemaleJson)

    },

    randomSurname: function() {
        if (this.person.gender === this.GENDER_MALE) 
            return this.randomValue(this.surnameJson)
        else
            return `${this.randomValue(this.surnameJson)}a`

    },

    randomPatronymic: function() {
        if (this.person.gender === this.GENDER_MALE) 
            return this.randomValue(this.patronymicJson)
        else 
            return `${this.randomValue(this.patronymicJson).slice(0, -2)}на`
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

        return this.randomIntNumber(2012, 1940);

    },

    randomProfession: function() {

        if (this.person.gender === this.GENDER_MALE) {
            if (this.person.birthYear >= 2005) 
                return "Школьник"
            else if (this.person.birthYear >= 2001)
                return "Студент"
            else if (this.person.birthYear <= 1956)
                return "Пенсионер"
            else return this.randomValue(this.maleProfessionJson)

        }

        if (this.person.gender === this.GENDER_FEMALE) {
            if (this.person.birthYear >= 2005) 
                return "Школьница"
            else if (this.person.birthYear >= 2001)
                return "Студентка"
            else if (this.person.birthYear <= 1961)
                return "Пенсионерка"
            else return this.randomValue(this.femaleProfessionJson)

        }
        
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

let Audience = [
    ["Lecture hall_203", 15, "Engineering and Technology"],
    ["Audit_101", 18, "Humanitarian sciences"],
    ["Audit_118A", 12, "Business and Economics"],
    ["Computer_class_305", 20, "Information Technology"],
    ["Chemical_laboratory_12", 16, "Natural Sciences"]
];

let Groups = [
    ["Technical_Visionaries", 30, "Engineering and Technology"],
    ["Creative_Contemplators", 10, "Business and Economics"],
    ["Digital_Explorers", 15, "Information Technology"]
];


function Print(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            document.write(data[i][j] + ", ");
        }
        document.write("<br>");
    }
}

function PrintSpecificAudience(data) {

    let flag = false;
    let inputUser = prompt("Введите название факультета:");
        for (let i = 0; i < data.length; i++) {
            if (data[i][2] == inputUser) {
                flag = true;
                for (let j = 0; j < data[i].length; j++) {
                    document.write(data[i][j] + " ");
                }
                document.write("<br>");
            }
        }
        if (!flag) {
            document.write("Нет аудиторий для указанного факультета: " + inputUser + "<br>");
        }

}

function PrintSuitableAudiences(data, Groups) {
    for (let i = 0; i < Groups.length; i++) {
        let flag = false; 

        for (let j = 0; j < data.length; j++) {
            if (Groups[i][1] <= data[j][1]) {
                if (!flag) { 
                    document.write("Для группы: " + Groups[i][0] + ", подходят такие аудитории: <br> ");
                    flag = true;
                }
                document.write(data[j][0] + "<br>"); 
            }
        }

        if (!flag) {
            document.write("Для группы: " + Groups[i][0] + ", не одна аудитория не подходит!<br> <br>");
        } else {
            document.write("<br>");
        }
    }
}


function SortByNumberOfSeats(data) {
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
            if (data[j][1] > data[j + 1][1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
}


function SortByName(data)  {
    for (let i = 0; i < data.length - 1; i++) {
        let index = i;

        for (let j = i + 1; j < data.length; j++) {
            if (data[j][0] < data[index][0]) {
                index = j;
            }
        }

        if (index !== i) {
            let temp = data[i];
            data[i] = data[index];
            data[index] = temp;
        }
    }
}



const pets= [
    {
        "name" : "Purrsloud",
        "species" : "Cat",
        "favFoods" : ["wet food", "dry food", "wet food"],
        "birthYear" : 2016,
        "photo" : "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        "name" : "Mr Gwumpy",
        "species" : "Cat",
        "favFoods" : ["caviar"],
        "birthYear" : 2016,
        "photo" : "https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg"
    },
    {
        "name" : "Jumpy",
        "species" : "Scaredy Cat",
        "favFoods" : ["not cucumbers!"],
        "birthYear" : 2008,
        "photo" : "https://i.ytimg.com/vi/eX2qFMC8cFo/maxresdefault.jpg"
    },
    {
        "name" : "Meowsalot",
        "species" : "Cat",
        "favFoods" : ["tuna", "catnip", "celery"],
        "birthYear" : 2012,
        "photo" : "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
        "name" : "Cindy Clawford",
        "species" : "Cat",
        "favFoods" : ["mice"],
        "birthYear" : 2012,
        "photo" : "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
    },
    {
        "name" : "Katy Purry",
        "species" : "Cat",
        "favFoods" : ["bugs"],
        "birthYear" : 2015,
        "photo" : "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1183822926.jpg"
    },
    {
        "name" : "Dopey",
        "species" : "Cat",
        "favFoods" : ["bugs"],
        "birthYear" : 2018,
        "photo" : "https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"
    },
    {
        "name" : "Blobby",
        "species" : "Cat",
        "favFoods" : ["your soul"],
        "birthYear" : 2020,
        "photo" : "https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg"
    }

];

(function () {
    const petImage = document.getElementsByClassName("pet-pic") // img
    const petNames = document.getElementsByClassName("pet-name") // h3

    for (let i = 0; i < petImage.length; i++) {
        petImage[i].src = pets[i].photo;
    }


    // for (let i = 0; i < petNames.length; i++) {
    //     petNames[i].innerText = pets[i].name;
    // }
})();



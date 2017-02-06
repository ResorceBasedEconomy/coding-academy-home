'use strict'

let projects = [
    {projName: 'Meme-Hive', url: 'https://coding-academy.net/memeGenerator/ShayPeleg-MarkFridman/', imgUrl: '', programmers: ['Shay Peleg', 'Mark Fridman'] },
    {projName: 'Feel My Meal', url: 'https://coding-academy.net/feelmymeal/#/', imgUrl: '', programmers: ['Mark Fridman', 'Omer Zfira'] },
    {projName: 'Mine Sweeper', url: '', imgUrl: '', programmers: [] }, 
];

let elBoard = document.querySelector('.board');
projects.forEach( function(project) {
    let programmerStr = project.programmers.reduce(function(programmer, acc) {
        return acc +=  ', ' + programmer;
    }, '');
    programmerStr = programmerStr.slice(0,-2);

    elBoard.innerHTML += '<div class="card">'+
                            '<a href="'+ project.url +'" target="_blank">'+ project.projName +'</a>'+
                            '<p> '+ programmerStr +'</p>' +
                            '<img src="'+ project.imgUrl +'">' +
                         '</div>';
})

let contentVisable = false ;

document.getElementById('vitamin-b1').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBOne = document.getElementById('source-b1');
    if (contentVisable){
        sourceBOne.innerHTML = '';
    } else {
    const images = [
        {src:'images2/grains.png',alt:'grains'},
        {src:'images2/meat.png',alt:'meat'},
        {src:'images2/fish.png',alt:'fish'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBOne.appendChild(div);
    })
    }
    contentVisable = !contentVisable;
});

let contentVisable1 = false ;

document.getElementById('vitamin-b2').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBTwo = document.getElementById('source-b2');
    if (contentVisable1){
        sourceBTwo.innerHTML = '';
    } else {
    const images = [
        {src:'images2/organs.png',alt:'organs'},
        {src:'images2/eggs.png',alt:'eggs'},
        {src:'images2/milk.png',alt:'milk'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBTwo.appendChild(div);
    })
    }
    contentVisable1 = !contentVisable1;
});

let contentVisable2 = false ;

document.getElementById('vitamin-b3').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBThree = document.getElementById('source-b3');
    if (contentVisable2){
        sourceBThree.innerHTML = '';
    } else {
    const images = [
        {src:'images2/meat.png',alt:'meat'},
        {src:'images2/salmon.png',alt:'salmon'},
        {src:'images2/leafy-greens.png',alt:'leafy greens'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBThree.appendChild(div);
    })
    }
    contentVisable2 = !contentVisable2;
});

let contentVisable3 = false ;

document.getElementById('vitamin-b5').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBFive = document.getElementById('source-b5');
    if (contentVisable3){
        sourceBFive.innerHTML = '';
    } else {
    const images = [
        {src:'images2/organs.png',alt:'organs'},
        {src:'images2/mushrooms.png',alt:'mushrooms'},
        {src:'images2/tuna.png',alt:'tuna'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBFive.appendChild(div);
    })
    }
    contentVisable3 = !contentVisable3;
});

let contentVisable4 = false ;

document.getElementById('vitamin-b6').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBSix = document.getElementById('source-b6');
    if (contentVisable4){
        sourceBSix.innerHTML = '';
    } else {
    const images = [
        {src:'images2/fish.png',alt:'fish'},
        {src:'images2/milk.png',alt:'milk'},
        {src:'images2/carrots.png',alt:'carrots'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBSix.appendChild(div);
    })
    }
    contentVisable4 = !contentVisable4;
});

let contentVisable5 = false ;

document.getElementById('vitamin-b7').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBSeven = document.getElementById('source-b7');
    if (contentVisable5){
        sourceBSeven.innerHTML = '';
    } else {
    const images = [
        {src:'images2/eggs.png',alt:'eggs'},
        {src:'images2/almonds.png',alt:'almonds'},
        {src:'images2/spinich.png',alt:'spinich'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBSeven.appendChild(div);
    })
    }
    contentVisable5 = !contentVisable5;
});

let contentVisable6 = false ;

document.getElementById('vitamin-b9').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBNine = document.getElementById('source-b9');
    if (contentVisable6){
        sourceBNine.innerHTML = '';
    } else {
    const images = [
        {src:'images2/beef.png',alt:'beef'},
        {src:'images2/liver.png',alt:'liver'},
        {src:'images2/asparogus.png',alt:'asparogus'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBNine.appendChild(div);
    })
    }
    contentVisable6 = !contentVisable6;
});

let contentVisable7 = false ;

document.getElementById('vitamin-b12').addEventListener('click',function(event){
    event.preventDefault();
    const sourceBTwelwe = document.getElementById('source-b12');
    if (contentVisable7){
        sourceBTwelwe.innerHTML = '';
    } else {
    const images = [
        {src:'images2/clams.png',alt:'clams'},
        {src:'images2/fish.png',alt:'fish'},
        {src:'images2/meat.png',alt:'meat'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceBTwelwe.appendChild(div);
    })
    }
    contentVisable7 = !contentVisable7;
});

let contentVisable8 = false ;

document.getElementById('vitamin-c').addEventListener('click',function(event){
    event.preventDefault();
    const sourceC = document.getElementById('source-c');
    if (contentVisable8){
        sourceC.innerHTML = '';
    } else {
    const images = [
        {src:'images2/citrus-fruits.png',alt:'citrus fruits'},
        {src:'images2/bell-pepper.png',alt:'bell pepper'},
        {src:'images2/brussels-sprouts.png',alt:'brussels sprouts'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceC.appendChild(div);
    })
    }
    contentVisable8 = !contentVisable8;
});

let contentVisable9 = false ;

document.getElementById('vitamin-a').addEventListener('click',function(event){
    event.preventDefault();
    const sourceA = document.getElementById('source-a');
    if (contentVisable9){
        sourceA.innerHTML = '';
    } else {
    const images = [
        {src:'images2/liver.png',alt:'liver'},
        {src:'images2/fish.png',alt:'fish'},
        {src:'images2/sweet-potato.png',alt:'sweet potato'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceA.appendChild(div);
    })
    }
    contentVisable9 = !contentVisable9;
});

let contentVisable10 = false ;

document.getElementById('vitamin-d').addEventListener('click',function(event){
    event.preventDefault();
    const sourceD = document.getElementById('source-d');
    if (contentVisable10){
        sourceD.innerHTML = '';
    } else {
    const images = [
        {src:'images2/sunlight.png',alt:'sunlight'},
        {src:'images2/fish-oil.png',alt:'fish oil'},
        {src:'images2/milk.png',alt:'milk'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceD.appendChild(div);
    })
    }
    contentVisable10 = !contentVisable10;
});

let contentVisable11 = false ;

document.getElementById('vitamin-e').addEventListener('click',function(event){
    event.preventDefault();
    const sourceE = document.getElementById('source-e');
    if (contentVisable11){
        sourceE.innerHTML = '';
    } else {
    const images = [
        {src:'images2/sunflower-seeds.png',alt:'sunflower seeds'},
        {src:'images2/wheat-germ.png',alt:'wheat germ'},
        {src:'images2/almonds.png',alt:'almonds'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceE.appendChild(div);
    })
    }
    contentVisable11 = !contentVisable11;
});

let contentVisable12 = false ;

document.getElementById('vitamin-k').addEventListener('click',function(event){
    event.preventDefault();
    const sourceK = document.getElementById('source-k');
    if (contentVisable12){
        sourceK.innerHTML = '';
    } else {
    const images = [
        {src:'images2/leafy-greens.png',alt:'lesfy greens'},
        {src:'images2/soybeans.png',alt:'soybeans'},
        {src:'images2/pumkin.png',alt:'pumkin'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceK.appendChild(div);
    })
    }
    contentVisable12 = !contentVisable12;
});

let contentVisable13 = false ;

document.getElementById('calcium').addEventListener('click',function(event){
    event.preventDefault();
    const sourceCalcium = document.getElementById('source-calcium');
    if (contentVisable13){
        sourceCalcium.innerHTML = '';
    } else {
    const images = [
        {src:'images2/milk.png',alt:'milk'},
        {src:'images2/leafy-greens.png',alt:'leafy greens'},
        {src:'images2/broccoli.png',alt:'broccoli'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceCalcium.appendChild(div);
    })
    }
    contentVisable13 = !contentVisable13;
});

let contentVisable14 = false ;

document.getElementById('phosphorus').addEventListener('click',function(event){
    event.preventDefault();
    const sourcePhosphorus = document.getElementById('source-phosphorus');
    if (contentVisable14){
        sourcePhosphorus.innerHTML = '';
    } else {
    const images = [
        {src:'images2/salmon.png',alt:'salmon'},
        {src:'images2/yogurt.png',alt:'yogurt'},
        {src:'images2/turkey.png',alt:'turkey'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourcePhosphorus.appendChild(div);
    })
    }
    contentVisable14 = !contentVisable14;
});

let contentVisable15 = false ;

document.getElementById('magnesium').addEventListener('click',function(event){
    event.preventDefault();
    const sourceMagnesium = document.getElementById('source-magnesium');
    if (contentVisable15){
        sourceMagnesium.innerHTML = '';
    } else {
    const images = [
        {src:'images2/almonds.png',alt:'almonds'},
        {src:'images2/cashews.png',alt:'cashews'},
        {src:'images2/black-beans.png',alt:'black beans'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceMagnesium.appendChild(div);
    })
    }
    contentVisable15 = !contentVisable15;
});

let contentVisable16 = false ;

document.getElementById('sodium').addEventListener('click',function(event){
    event.preventDefault();
    const sourceSodium = document.getElementById('source-sodium');
    if (contentVisable16){
        sourceSodium.innerHTML = '';
    } else {
    const images = [
        {src:'images2/salt.png',alt:'salt'},
        {src:'images2/processed-food.png',alt:'processed food'},
        {src:'images2/canned-soup.png',alt:'canned soup'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceSodium.appendChild(div);
    })
    }
    contentVisable16 = !contentVisable16;
});

let contentVisable17 = false ;

document.getElementById('chloride').addEventListener('click',function(event){
    event.preventDefault();
    const sourceChloride = document.getElementById('source-chloride');
    if (contentVisable17){
        sourceChloride.innerHTML = '';
    } else {
    const images = [
        {src:'images2/seaweed.png',alt:'seaweed'},
        {src:'images2/salt.png',alt:'salt'},
        {src:'images2/celery.png',alt:'celery'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceChloride.appendChild(div);
    })
    }
    contentVisable17 = !contentVisable17;
});

let contentVisable18 = false ;

document.getElementById('potassium').addEventListener('click',function(event){
    event.preventDefault();
    const sourcePotassium = document.getElementById('source-potassium');
    if (contentVisable18){
        sourcePotassium.innerHTML = '';
    } else {
    const images = [
        {src:'images2/lentils.png',alt:'lentils'},
        {src:'images2/acorn-squash.png',alt:'acorn squash'},
        {src:'images2/bananas.png',alt:'bananas'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourcePotassium.appendChild(div);
    })
    }
    contentVisable18 = !contentVisable18;
});

let contentVisable19 = false ;

document.getElementById('sulfur').addEventListener('click',function(event){
    event.preventDefault();
    const sourceSulfur = document.getElementById('source-sulfur');
    if (contentVisable19){
        sourceSulfur.innerHTML = '';
    } else {
    const images = [
        {src:'images2/garlic.png',alt:'garlic'},
        {src:'images2/onion.png',alt:'onion'},
        {src:'images2/eggs.png',alt:'eggs'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceSulfur.appendChild(div);
    })
    }
    contentVisable19 = !contentVisable19;
});

let contentVisable20 = false ;

document.getElementById('iron').addEventListener('click',function(event){
    event.preventDefault();
    const sourceIron = document.getElementById('source-iron');
    if (contentVisable20){
        sourceIron.innerHTML = '';
    } else {
    const images = [
        {src:'images2/oysters.png',alt:'oysters'},
        {src:'images2/white-beans.png',alt:'white-beans'},
        {src:'images2/spinich.png',alt:'spinich'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceIron.appendChild(div);
    })
    }
    contentVisable20 = !contentVisable20;
});

let contentVisable21 = false ;

document.getElementById('manganese').addEventListener('click',function(event){
    event.preventDefault();
    const sourceManganese = document.getElementById('source-manganese');
    if (contentVisable21){
        sourceManganese.innerHTML = '';
    } else {
    const images = [
        {src:'images2/pineapple.png',alt:'pineapple'},
        {src:'images2/pecans.png',alt:'pecans'},
        {src:'images2/peanuts.png',alt:'peanuts'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceManganese.appendChild(div);
    })
    }
    contentVisable21 = !contentVisable21;
});

let contentVisable22 = false ;

document.getElementById('copper').addEventListener('click',function(event){
    event.preventDefault();
    const sourceCopper = document.getElementById('source-copper');
    if (contentVisable22){
        sourceCopper.innerHTML = '';
    } else {
    const images = [
        {src:'images2/liver.png',alt:'liver'},
        {src:'images2/crabs.png',alt:'crab'},
        {src:'images2/cashews.png',alt:'cashews'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceCopper.appendChild(div);
    })
    }
    contentVisable22 = !contentVisable22;
});

let contentVisable23 = false ;

document.getElementById('zinc').addEventListener('click',function(event){
    event.preventDefault();
    const sourceZinc = document.getElementById('source-zinc');
    if (contentVisable23){
        sourceZinc.innerHTML = '';
    } else {
    const images = [
        {src:'images2/oysters.png',alt:'oysters'},
        {src:'images2/crabs.png',alt:'crab'},
        {src:'images2/chickpeas.png',alt:'chickpeas'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceZinc.appendChild(div);
    })
    }
    contentVisable23 = !contentVisable23;
});

let contentVisable24 = false ;

document.getElementById('iodine').addEventListener('click',function(event){
    event.preventDefault();
    const sourceIodine = document.getElementById('source-iodine');
    if (contentVisable24){
        sourceIodine.innerHTML = '';
    } else {
    const images = [
        {src:'images2/seaweed.png',alt:'seaweed'},
        {src:'images2/cod.png',alt:'cod'},
        {src:'images2/yogurt.png',alt:'yogurt'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceIodine.appendChild(div);
    })
    }
    contentVisable24 = !contentVisable24;
});

let contentVisable25 = false ;

document.getElementById('fluoride').addEventListener('click',function(event){
    event.preventDefault();
    const sourceFluoride = document.getElementById('source-fluoride');
    if (contentVisable25){
        sourceFluoride.innerHTML = '';
    } else {
    const images = [
        {src:'images2/fruit-juice.png',alt:'fruit juice'},
        {src:'images2/water.png',alt:'water'},
        {src:'images2/crabs.png',alt:'crab'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceFluoride.appendChild(div);
    })
    }
    contentVisable25 = !contentVisable25;
});

let contentVisable26 = false ;

document.getElementById('selenium').addEventListener('click',function(event){
    event.preventDefault();
    const sourceSelenium = document.getElementById('source-selenium');
    if (contentVisable26){
        sourceSelenium.innerHTML = '';
    } else {
    const images = [
        {src:'images2/brazil-nuts.png',alt:'brazil nuts'},
        {src:'images2/sardines.png',alt:'sardines'},
        {src:'images2/ham.png',alt:'ham'}
    ];
    images.forEach(source =>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = source.src;
        img.alt = source.alt;
        img.classList.add('popimg');
        const p = document.createElement('p');
        p.textContent = source.alt;
        p.classList.add('poptext');
        div.appendChild(img);
        div.appendChild(p);
        sourceSelenium.appendChild(div);
    })
    }
    contentVisable26 = !contentVisable26;
});

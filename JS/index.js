const getTab = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const res = await response.json();
    const data = res.data;
    showTab(data)
}

const showTab = (options) => {
    console.log(options);
    const tabConteiner = document.getElementById('tab-conteiner')
    options.forEach(option => {
        console.log(option.category);
        const li = document.createElement('li');
        li.classList.add('list-none');
        li.innerHTML = `
        <button id="${option.category_id}"  onclick="tabHandler('${option.category_id}')" class="btn bg-btn-primary-clr text-white py-1 px-5 font-semibold text-lg active:bg-teal-500">${option?.category}</button>`
        tabConteiner.appendChild(li);
    }
    );
}



const tabHandler = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const res = await response.json();
    const data = res?.data;
    console.log(data);

}
getTab();
// // Получаем все элементы с классом faq-item
// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach(item => {
//   const question = item.querySelector('.question');
//   const answer = item.querySelector('.answer');
//   const symbol = question.querySelector('span');

//   // Обработчик события для открытия/закрытия
//   question.addEventListener('click', () => {
//     // Проверяем, открыт ли уже ответ
//     const isOpen = answer.style.display === 'block';

//     // Закрываем все ответы
//     document.querySelectorAll('.answer').forEach(a => a.style.display = 'none');
//     document.querySelectorAll('.question span').forEach(s => s.textContent = '+');

//     // Если вопрос был закрыт, открываем его с задержкой
//     if (!isOpen) {
//       setTimeout(() => {
//         answer.style.display = 'block';
//         symbol.textContent = '-';
//       }, 2000);  // Задержка в 2 секунды
//     }
//   });
// });





import { metal,prof,krov } from "./data.js";


const sad = document.querySelector('#sad'); 
metal.forEach((metal) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
            <div class="w-[440px] h-[600px] rounded-[20px] border-[1px] transition-transform duration-300 hover:border-gray-800 hover:bg-gray-100 hover:scale-105 ">
                <img src="${metal.img2}" >
                <div class="flex ml-[35px]  items-center ">
              <h1 class=" text-[18px] font-bold ">${metal.name1}</h1>
               <a href=""><img src="${metal.img3}"  class="ml-[160px]"></a> 
              </div>
              <div class="flex ml-[35px] ">
                <img src="${metal.img4}" >
                <p class="text-[16px] font-bold text-[#727488] ml-[15px] ">${metal.brand}</p>
              </div>
              <div class="flex ml-[35px] mt-[15px]">
                <img src="${metal.img5}" >
                <p class="text-[16px font-bold text-[#727488] ml-[15px] ">${metal.height}</p>
              </div>
              <div class="flex ml-[35px] mt-[15px]">
                <img src="${metal.img6}">
                <p class="text-[16px font-bold text-[#727488] ml-[15px] ]">${metal.grand}</p>
              </div>
              <div class="flex ml-[35px] mt-[15px]">
                <img src="${metal.img7}">
                <p class="text-[16px font-bold text-[#727488] ml-[15px] ]">${metal.num}</p>
              </div>
              <div class="flex mt-[15px] ml-[35px] items-center">
                <p class="font-bold text-[22px] text-[#333333]  ">${metal.color}</p>
                <a href="" class="text-[#F4683F] text-[16px] ml-[80px]">${metal.valie}</a>
              </div>

            </div> 
    `;
    sad.appendChild(talList);
});



const dir = document.querySelector('#dir');
prof.forEach((prof) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
       <a href="">
        <div class="w-[440px] h-[130px] border-[3px] flex items-center rounded-[20px] transition-transform duration-300 hover:border-gray-800 hover:bg-gray-100 hover:scale-105">
                    <img src="${prof.imgg}" class="ml-[45px]">
                    <p class="text-[18px] text-[#333333] font-bold ml-[20px] ">${prof.name2}</p>
                  </div>
                  </a>
    `;
    dir.appendChild(talList);
});



const bek = document.querySelector('#bek');
krov.forEach((krov) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
       <div class="cursor-not-allowed">
      <img src="${krov.img9}" class="transition-transform duration-300 hover:scale-110">
       <p class="text-[#333333] text-[16px] mt-[20px] transition-all duration-300 hover:text-red-500 hover:scale-105">${krov.name9}</p>
      </div>
    `;
    bek.appendChild(talList);
});


document.querySelectorAll('.faq-item').forEach((item) => {
  item.querySelector('.question').addEventListener('click', () => {
    const answer = item.querySelector('.answer');
    const isOpen = answer.classList.contains('block');

    document.querySelectorAll('.faq-item .answer').forEach((el) => el.classList.add('hidden'));
    document.querySelectorAll('.toggle-icon').forEach((el) => el.textContent = '+');

    if (!isOpen) {
      answer.classList.remove('hidden');
      answer.classList.add('block');
      item.querySelector('.toggle-icon').textContent = '−';
      answer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

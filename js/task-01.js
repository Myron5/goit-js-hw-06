const categoryList = document.querySelector('#categories');
const categoryItems = [...categoryList.children];
console.log('К-сть позицій зі списку категорій: ', categoryItems.length);

categoryItems.forEach(item => {
  const subCategoryTitle = item.children[0];
  const subCategoryList = item.children[1];
  console.log(
    `Категорія ${subCategoryTitle.textContent} ${subCategoryList.children.length} елементами`
  );
});

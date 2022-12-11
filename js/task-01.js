const categoryList = document.querySelector('#categories');
const categoryItems = categoryList.children;
console.log('К-сть позицій зі списку категорій: ', categoryItems.length);

for (const item of categoryItems) {
  const subCategoryTitle = item.children[0];
  const subCategoryList = item.children[1];
  console.log(
    `Категорія ${subCategoryTitle.textContent} ${subCategoryList.children.length} елементами`
  );
}

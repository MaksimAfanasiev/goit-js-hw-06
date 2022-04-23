//1

const allCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", allCategories.length);

//2

allCategories.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const elementsCount = category.querySelector("ul").children.length;

    console.log("Category: ", categoryName);
    console.log("Elements: ", elementsCount);
})
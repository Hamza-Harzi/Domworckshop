// const buttonPlus = document.querySelectorAll(".btn-plus");
// const counteItems = document.querySelectorAll(".counting");
// const buttonMinus = document.querySelectorAll(".btn-minus");

// for (let index = 0; index < counteItems.length; index++) {
//     const oneButtonPlus = buttonPlus[index];
//     const onebuttonMinus = buttonMinus[index];
//     const oneCounteItem = counteItems[index];

//     oneButtonPlus.addEventListener("click", function(event) {
//         oneCounteItem.innerHTML++;
//     });
//     onebuttonMinus.addEventListener("click", function(e) {
//         if (oneCounteItem.innerHTML > 0) oneCounteItem.innerHTML--;
//     });
// }

products = [{
        name: "T-shirt",
        price: 15,
        picture: "https://m.media-amazon.com/images/I/61yBCMmuI4L._UY741_.jpg",
        count: 0,
    },
    {
        name: "pc",
        price: 1500,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROST2HbbMCdYPan43369PPgyLcEabUD43y0qpZIlgN&s",
        count: 0,
    },
    {
        name: "T-shirt",
        price: 15,
        picture: "https://m.media-amazon.com/images/I/61yBCMmuI4L._UY741_.jpg",
        count: 0,
    },
    {
        name: "T-shirt",
        price: 15,
        picture: "https://m.media-amazon.com/images/I/61yBCMmuI4L._UY741_.jpg",
        count: 0,
    },
];

const productList = document.getElementById("products-list");

function ready() {
    let deleteProductButton = document.getElementsByClassName("btn-remove");
    for (let i = 0; i < deleteProductButton.length; i++) {
        let button = deleteProductButton[i];
        button.addEventListener("click", productContainer);
        updateCartTotal();
    }

    function productContainer(event) {
        let deleteProductButton = event.target;
        deleteProductButton.parentElement.parentElement.remove();
        updateCartTotal();
    }

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        addProductToDom(product);
    }

    function calculateTotla(products) {
        let totla = 0;
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            totla += product.price * product.count;
        }
        return totla;
    }

    function addProductToDom(product) {
        //create a div of article;
        const productContainer = document.createElement("div");
        productContainer.className = "container-1";

        const productHeader = document.createElement("div");
        productHeader.className = "container";

        const productImage = document.createElement("img");
        productImage.style.width = "100%";
        productImage.src = product.picture;

        const productDescription = document.createElement("div");
        productDescription.className = "content";

        const productTitle = document.createElement("h1");
        productTitle.innerText = product.name;

        const productPrice = document.createElement("h1");
        productPrice.innerText = product.price;

        const productFooter = document.createElement("div");
        productFooter.className = "choi";

        const addProductButton = document.createElement("button");
        addProductButton.innerText = "+";
        addProductButton.className = "btn-plus";
        const productCount = document.createElement("h2");
        productCount.className = "counting";
        productCount.innerText = "0";
        const removeProductButton = document.createElement("button");
        removeProductButton.innerText = "-";
        removeProductButton.className = "btn-minus";
        //
        const deleteProductButton = document.createElement("button");
        deleteProductButton.innerHTML = "delete";
        deleteProductButton.className = "btn-remove";
        deleteProductButton.onclick = () => myFunction;

        addProductButton.addEventListener("click", function(event) {
            productCount.innerHTML++;
            product.count++;
            const totlaPrice = document.getElementById("totlaPrice");
            totlaPrice.innerText = calculateTotla(products);
        });
        removeProductButton.addEventListener("click", function(e) {
            if (productCount.innerHTML > 0) {
                productCount.innerHTML--;
                product.count--;
                totlaPrice.innerText = calculateTotla(products);
            }
        });
        deleteProductButton.addEventListener("click", function(e) {});

        productDescription.appendChild(productPrice);

        productDescription.appendChild(deleteProductButton);

        productDescription.appendChild(productTitle);
        productHeader.appendChild(productDescription);
        productHeader.appendChild(productImage);
        productContainer.appendChild(productHeader);

        productFooter.appendChild(addProductButton);
        productFooter.appendChild(productCount);
        productFooter.appendChild(removeProductButton);
        productContainer.appendChild(productFooter);

        productList.appendChild(productContainer);
    }

    // form.addEventListener('submit', e => {
    //     e.preventDefault();

    //     validateInputs();
    // });

    // const setError = (element, message) => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error');

    //     errorDisplay.innerText = message;
    //     inputControl.classList.add('error');
    //     inputControl.classList.remove('success')
    // }

    // const setSuccess = element => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error');

    //     errorDisplay.innerText = '';
    //     inputControl.classList.add('success');
    //     inputControl.classList.remove('error');
    // };

    // const isValidEmail = email => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }

    // const validateInputs = () => {
    //     const usernameValue = username.value.trim();
    //     const emailValue = email.value.trim();
    //     const passwordValue = password.value.trim();
    //     const password2Value = password2.value.trim();

    //     if (usernameValue === '') {
    //         setError(username, 'Username is required');
    //     } else {
    //         setSuccess(username);
    //     }

    //     if (emailValue === '') {
    //         setError(email, 'Email is required');
    //     } else if (!isValidEmail(emailValue)) {
    //         setError(email, 'Provide a valid email address');
    //     } else {
    //         setSuccess(email);
    //     }

    //     if (passwordValue === '') {
    //         setError(password, 'Password is required');
    //     } else if (passwordValue.length < 8) {
    //         setError(password, 'Password must be at least 8 character.')
    //     } else {
    //         setSuccess(password);
    //     }

    //     if (password2Value === '') {
    //         setError(password2, 'Please confirm your password');
    //     } else if (password2Value !== passwordValue) {
    //         setError(password2, "Passwords doesn't match");
    //     } else {
    //         setSuccess(password2);
    //     }

    // };

    const firstName = document.querySelector("#fname");
    const lastName = document.querySelector("#lname");
    const yourEmail = document.querySelector("#email");
    const yourPassword = document.querySelector("#myInput");
    let buttonPassWord = document.querySelector("#demo");
    let buttonSubmit = document.querySelector("#submit");

    const validation = [false, false, false, false];

    buttonSubmit.disabled = true;

    firstName.addEventListener("change", function(event) {
        let fname = event.target.value;
        if (fname.length < 5) {
            alert("Please enter your fname");
        } else {
            validation[0] = true;
            validationForm();
            taggleStyle();
        }
    });
    lastName.addEventListener("change", function(event) {
        let lname = event.target.value;
        if (lname.length < 4) {
            alert("Please enter your lname");
        } else {
            validation[1] = true;
            validationForm();
            taggleStyle();
        }
    });

    yourEmail.addEventListener("change", function(event) {
        let email = event.target.value;
        if (!email.includes("@")) {
            alert("Please enter your email");
        } else {
            validation[2] = true;
            validationForm();
            taggleStyle();
        }
    });

    yourPassword.addEventListener("change", function(event) {
        let password = event.target.value;
        let camel = password[0];
        if (!(camel == camel.toUpperCase()) && !(password.length < 8)) {
            alert("Please enter a  valid password");
        } else {
            validation[3] = true;
            validationForm();
            taggleStyle();
        }
    });

    buttonPassWord.addEventListener("click", function(event) {
        if (yourPassword.type === "password") {
            yourPassword.type = "Text";
            buttonPassWord.innerHTML = "hide password";
        } else {
            yourPassword.type = "password";
            buttonPassWord.innerHTML = "show password";
        }
    });

    function validationForm() {
        let sum = 0;
        for (let i = 0; i < validation.length; i++) {
            if (validation[i] === true) {
                sum += 1;
            }
        }
        if (sum == validation.length) {
            return true;
        } else {
            return false;
        }
    }

    function taggleStyle() {
        if (validationForm()) {
            buttonSubmit.disabled = false;
            buttonSubmit.classList.add("btn-danger");
        } else {
            buttonSubmit.disabled = true;
        }
    }
}
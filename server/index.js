const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').Server(app);
const PORT = 4000
const fs = require("fs");

const socketIO = require('socket.io')(http, {
    cors: {
        // origin: "http://localhost:3000"
        origin: "https://shoptech-uth.vercel.app"
    },
});

const savedDataAdmin = fs.readFileSync("datas/data-admin.json")
const objectDataAdmin = JSON.parse(savedDataAdmin)

const savedDataUser = fs.readFileSync("datas/data-user.json")
const objectDataUser = JSON.parse(savedDataUser)

const savedDataProduct = fs.readFileSync("datas/data-product.json")
const objectDataProduct = JSON.parse(savedDataProduct)

const savedDataPromote = fs.readFileSync("datas/data-promote.json")
const objectDataPromote = JSON.parse(savedDataPromote)

const savedDataOrder = fs.readFileSync("datas/data-order.json")
const objectDataOrder = JSON.parse(savedDataOrder)

const savedDataGiftcode = fs.readFileSync("datas/data-giftcode.json")
const objectDataGiftcode = JSON.parse(savedDataGiftcode)

const savedDataComment = fs.readFileSync("datas/data-comment.json")
const objectDataComment = JSON.parse(savedDataComment)

const savedDataFeedback = fs.readFileSync("datas/data-feedback.json")
const objectDataFeedback = JSON.parse(savedDataFeedback)

app.use(cors())
app.use('/public', express.static('./public'));

//  --------------------------- ADMIN Method -------------------------------------
const findAdmin = (idKey, myArray, avatarUrlAdmin, fullnameAdmin, emailAdmin, phoneAdmin, addressAdmin) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].adminID === idKey) {
            myArray[i].avatarUrl = avatarUrlAdmin;
            myArray[i].fullname = fullnameAdmin;
            myArray[i].email = emailAdmin;
            myArray[i].phone = phoneAdmin;
            myArray[i].address = addressAdmin;
        }
    }
    const stringData = JSON.stringify(objectDataAdmin, null, 2)
    fs.writeFile("datas/data-admin.json", stringData, (err) => {
        console.error(err)
    })
}

const findCustomer = (idKey, myArray, fullnameCustomer, emailCustomer, phoneCustomer, addressCustomer) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].userID === idKey) {
            myArray[i].fullname = fullnameCustomer;
            myArray[i].email = emailCustomer;
            myArray[i].phone = phoneCustomer;
            myArray[i].address = addressCustomer;
        }
    }
    const stringData = JSON.stringify(objectDataUser, null, 2)
    fs.writeFile("datas/data-user.json", stringData, (err) => {
        console.error(err)
    })
}

const findProduct = (idKey, myArray, nameProduct, typeProduct, enTypeProduct, priceProduct, colorProduct, hotDealProduct, productFeatured, statusProduct) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            myArray[i].name = nameProduct;
            myArray[i].type = typeProduct;
            myArray[i].enType = enTypeProduct;
            myArray[i].price = priceProduct;
            myArray[i].color = colorProduct;
            myArray[i].hotDeal = hotDealProduct;
            myArray[i].featured = productFeatured;
            myArray[i].status = statusProduct;
        }
    }
    const stringData = JSON.stringify(objectDataProduct, null, 2)
    fs.writeFile("datas/data-product.json", stringData, (err) => {
        console.error(err)
    })
}

const findProductToEditBanner = (idKey, myArray, imagePrimaryProduct) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            myArray[i].imagePrimary = imagePrimaryProduct;
        }
    }
    const stringData = JSON.stringify(objectDataProduct, null, 2)
    fs.writeFile("datas/data-product.json", stringData, (err) => {
        console.error(err)
    })
}

const findProductToEditImageLink = (idKey, myArray, imageLinkProduct) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            myArray[i].imageLink = imageLinkProduct;
        }
    }
    const stringData = JSON.stringify(objectDataProduct, null, 2)
    fs.writeFile("datas/data-product.json", stringData, (err) => {
        console.error(err)
    })
}

const findProductToEditImageList = (idKey, myArray, imageListProduct) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            var data = myArray[i].imageList;
            myArray[i].imageList = data.concat(imageListProduct);
        }
    }
    const stringData = JSON.stringify(objectDataProduct, null, 2)
    fs.writeFile("datas/data-product.json", stringData, (err) => {
        console.error(err)
    })
}

const findPromote = (idKey, myArray, imageLinkPromote, namePromote, timeStartPromote, timeEndPromote, percentPromote, applyPromote) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            myArray[i].imageLink = imageLinkPromote;
            myArray[i].name = namePromote;
            myArray[i].timeStart = timeStartPromote;
            myArray[i].timeEnd = timeEndPromote;
            myArray[i].percent = percentPromote;
            myArray[i].apply = applyPromote;
        }
    }
    const stringData = JSON.stringify(objectDataPromote, null, 2)
    fs.writeFile("datas/data-promote.json", stringData, (err) => {
        console.error(err)
    })
}






//  -------------------------Client Method ------------------------------------------
const findUserToSetStatus = (idKey, myArray, statusLoginUser) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].userID === idKey) {
            myArray[i].statusLogin = statusLoginUser;
        }
    }
    const stringData = JSON.stringify(objectDataUser, null, 2)
    fs.writeFile("datas/data-user.json", stringData, (err) => {
        console.error(err)
    })
}

const findUserToAddToCart = (idKey, myArray, cartToAdd) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].userID === idKey) {
            var data = myArray[i].cart;
            if (data.length != 0) {
                for (var j = 0; j < data.length; j++) {
                    if (JSON.stringify(data[j]) === JSON.stringify(cartToAdd)) {
                        return;
                    }
                    if (data[j].id == cartToAdd.id &&
                        data[j].option == cartToAdd.option &&
                        data[j].color == cartToAdd.color) {
                        return;
                    }
                }
                data.push(cartToAdd);
            }
            else {
                data.push(cartToAdd)
            }
        }
    }
    const stringData = JSON.stringify(objectDataUser, null, 2)
    fs.writeFile("datas/data-user.json", stringData, (err) => {
        console.error(err)
    })
}

const findProductToAddQuantity = (idKey, myArray, indexProduct) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].userID === idKey) {
            var data = myArray[i].cart;
            for (var j = 0; j < data.length; j++) {
                if (data[j].indexProduct === indexProduct) {
                    data[j].quantity = data[j].quantity + 1;
                }
            }
        }
    }
    const stringData = JSON.stringify(objectDataUser, null, 2)
    fs.writeFile("datas/data-user.json", stringData, (err) => {
        console.error(err)
    })
}

const findProductToMinusQuantity = (idKey, myArray, indexProduct) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].userID === idKey) {
            var data = myArray[i].cart;
            for (var j = 0; j < data.length; j++) {
                if (data[j].indexProduct === indexProduct) {
                    if (data[j].quantity == 1)
                        return
                    data[j].quantity = data[j].quantity - 1;
                }
            }
        }
    }
    const stringData = JSON.stringify(objectDataUser, null, 2)
    fs.writeFile("datas/data-user.json", stringData, (err) => {
        console.error(err)
    })
}

const findProductToRemoveInCart = (idKey, myArray, indexProduct) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].userID === idKey) {
            var data = myArray[i].cart;
            for (var j = 0; j < data.length; j++) {
                if (data[j].indexProduct === indexProduct) {
                    data.splice(j, 1)
                }
            }
        }
    }
    const stringData = JSON.stringify(objectDataUser, null, 2)
    fs.writeFile("datas/data-user.json", stringData, (err) => {
        console.error(err)
    })
}

const findUserToRemoveCart = (idKey, myArray) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].userID === idKey) {
            var cartUser = myArray[i].cart;
            cartUser.splice(0, Number(cartUser.length))
        }
    }
    const stringData = JSON.stringify(objectDataUser, null, 2)
    fs.writeFile("datas/data-user.json", stringData, (err) => {
        console.error(err)
    })
}

const findOrderToSetStatus = (orderIDKey, myArray, statusOrder) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].orderID === orderIDKey) {
            myArray[i].status = statusOrder;
        }
    }
    const stringData = JSON.stringify(objectDataOrder, null, 2)
    fs.writeFile("datas/data-order.json", stringData, (err) => {
        console.error(err)
    })
}

const findOrderToSetStatusVoteOfProduct = (orderIDKey, myArray, productID) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].orderID === orderIDKey) {
            var listProducts = myArray[i].lists;
            for (var j = 0; j < listProducts.length; j++) {
                const boolCheck = true;
                if (listProducts[j].id === productID) {
                    listProducts[j].voted = boolCheck;
                }
            }
        }
    }
    const stringDataOrder = JSON.stringify(objectDataOrder, null, 2)
    fs.writeFile("datas/data-order.json", stringDataOrder, (err) => {
        console.error(err)
        return;
    })
    return;
}

const findProductToUpdateRating = (idKey, myArray, starVoted) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            myArray[i].star = ((myArray[i].star) * (myArray[i].voter) + Number(starVoted)) / (myArray[i].voter + 1);
            myArray[i].voter += 1;
        }
    }
    const stringDataProduct = JSON.stringify(objectDataProduct, null, 2)
    fs.writeFile("datas/data-product.json", stringDataProduct, (err) => {
        console.error(err)
        return;
    })
    return;
}







//  Socket method
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    //--------------------- Socket Admin ---------------------------- //
    socket.on("editInfoAdmin", data => {
        findAdmin(data.adminID, objectDataAdmin["admins"], data.avatarUrl, data.fullname, data.email, data.phone, data.address)
        socket.broadcast.emit("editInfoAdminResponse", data)
    })

    socket.on("editInfoCustomer", data => {
        findCustomer(data.userID, objectDataUser["users"], data.fullname, data.email, data.phone, data.address)
        socket.broadcast.emit("editInfoCustomerResponse", data)
    })

    socket.on("editInfoProduct", data => {
        findProduct(data.id, objectDataProduct["products"], data.name, data.type, data.enType, data.price, data.color, data.hotDeal, data.featured, data.status)
        socket.broadcast.emit("editInfoProductResponse", data)
    })

    socket.on("editImageBannerProduct", data => {
        findProductToEditBanner(data.id, objectDataProduct["products"], data.imagePrimary)
        socket.broadcast.emit("editImageBannerProductResponse", data)
    })

    socket.on("editImageLinkProduct", data => {
        findProductToEditImageLink(data.id, objectDataProduct["products"], data.imageLink)
        socket.broadcast.emit("editImageLinkProductResponse", data)
    })

    socket.on("editImageListProduct", data => {
        findProductToEditImageList(data.id, objectDataProduct["products"], data.imageList)
        socket.broadcast.emit("editImageListProductResponse", data)
    })

    socket.on("editInfoPromote", data => {
        findPromote(data.id, objectDataPromote["promotes"], data.imageLink, data.name, data.timeStart, data.timeEnd, data.percent, data.apply)
        socket.broadcast.emit("editInfoPromoteResponse", data)
    })

    socket.on('addProduct', (data) => {
        objectDataProduct["products"].push(data)
        const stringData = JSON.stringify(objectDataProduct, null, 2)
        fs.writeFile("datas/data-product.json", stringData, (err) => {
            console.error(err)
        })
        socket.broadcast.emit("addProductResponse", data)
    });

    socket.on('addPromote', (data) => {
        objectDataPromote["promotes"].push(data)
        const stringData = JSON.stringify(objectDataPromote, null, 2)
        fs.writeFile("datas/data-promote.json", stringData, (err) => {
            console.error(err)
        })
        socket.broadcast.emit("addPromoteResponse", data)
    });



    //--------------------- Socket Client ---------------------------- //
    socket.on('registerClient', (data) => {
        objectDataUser["users"].push(data)
        const stringData = JSON.stringify(objectDataUser, null, 2)
        fs.writeFile("datas/data-user.json", stringData, (err) => {
            console.error(err)
        })
        socket.broadcast.emit("registerResponse", data)
    });

    socket.on("setStatusLoginUser", data => {
        findUserToSetStatus(data.userID, objectDataUser["users"])
        socket.broadcast.emit("setStatusLoginUserResponse", data)
    })

    socket.on("addProductToCart", data => {
        findUserToAddToCart(data.userID, objectDataUser["users"], data.cart)
        socket.broadcast.emit("addProductToCartResponse", data)
    })

    socket.on("addQuantityProductInCart", (data, indexProduct) => {
        findProductToAddQuantity(data.userID, objectDataUser["users"], indexProduct)
        socket.broadcast.emit("addQuantityProductInCartResponse", data)
    })

    socket.on("minusQuantityProductInCart", (data, indexProduct) => {
        findProductToMinusQuantity(data.userID, objectDataUser["users"], indexProduct)
        socket.broadcast.emit("minusQuantityProductInCartResponse", data)
    })

    socket.on("removeProductInCart", (data, indexProduct) => {
        findProductToRemoveInCart(data.userID, objectDataUser["users"], indexProduct)
        socket.broadcast.emit("removeProductInCartResponse", data)
    })

    socket.on("removeAllInCart", data => {
        findUserToRemoveCart(data.userID, objectDataUser["users"])
        socket.broadcast.emit("removeAllInCartResponse", data)
    })

    socket.on('addOrder', (data, dataUser) => {
        objectDataOrder["orders"].push(data)
        findUserToRemoveCart(dataUser.userID, objectDataUser["users"])
        const stringData = JSON.stringify(objectDataOrder, null, 2)
        fs.writeFile("datas/data-order.json", stringData, (err) => {
            console.error(err)
        })
        socket.broadcast.emit("addOrderResponse", data)
    });

    socket.on("setStatusOrder", data => {
        findOrderToSetStatus(data.orderID, objectDataOrder["orders"], "Giao hàng thành công")
        socket.broadcast.emit("setStatusOrderResponse", data)
    })

    socket.on("handleVoteProduct", (dataStatus, dataRating, dataComment, productID, starVoted) => {
        findProductToUpdateRating(dataRating.id, objectDataProduct["products"], starVoted)
        findOrderToSetStatusVoteOfProduct(dataStatus.orderID, objectDataOrder["orders"], productID)
        objectDataComment["comments"].push(dataComment)
        const stringData = JSON.stringify(objectDataComment, null, 2)
        fs.writeFile("datas/data-comment.json", stringData, (err) => {
            console.error(err)
        })
        socket.broadcast.emit("handleVoteProductResponse", dataStatus)
    })


    // Socket contact
    socket.on('sendFeedbackFromGuest', (data) => {
        objectDataFeedback["feedbacks"].push(data)
        const stringDataFeedback = JSON.stringify(objectDataFeedback, null, 2)
        fs.writeFile("datas/data-feedback.json", stringDataFeedback, (err) => {
            console.error(err)
        })
        socket.broadcast.emit("sendFeedbackFromGuestResponse", data)
    });


    // disconnect
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

app.get("/api/admins", (req, res) => {
    const dataAdmin = fs.readFileSync("datas/data-admin.json")
    const dataAdmins = JSON.parse(dataAdmin)
    res.json(dataAdmins)
});

app.get("/api/users", (req, res) => {
    const dataUser = fs.readFileSync("datas/data-user.json")
    const dataUsers = JSON.parse(dataUser)
    res.json(dataUsers)
});

app.get("/api/products", (req, res) => {
    const dataProduct = fs.readFileSync("datas/data-product.json")
    const dataProducts = JSON.parse(dataProduct)
    res.json(dataProducts)
});

app.get("/api/promotes", (req, res) => {
    const dataPromote = fs.readFileSync("datas/data-promote.json")
    const dataPromotes = JSON.parse(dataPromote)
    res.json(dataPromotes)
});

app.get("/api/orders", (req, res) => {
    const dataOrder = fs.readFileSync("datas/data-order.json")
    const dataOrders = JSON.parse(dataOrder)
    res.json(dataOrders)
});

app.get("/api/giftcodes", (req, res) => {
    const dataGiftcode = fs.readFileSync("datas/data-giftcode.json")
    const dataGiftcodes = JSON.parse(dataGiftcode)
    res.json(dataGiftcodes)
});

app.get("/api/comments", (req, res) => {
    const dataComment = fs.readFileSync("datas/data-comment.json")
    const dataComments = JSON.parse(dataComment)
    res.json(dataComments)
});

app.get("/api/feedbacks", (req, res) => {
    const dataFeedback = fs.readFileSync("datas/data-feedback.json")
    const dataFeedbacks = JSON.parse(dataFeedback)
    res.json(dataFeedbacks)
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

<html lang="en">
    <head>
    <title>POCA index</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="UTF-8"/>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.min.js"
        integrity="sha512-1/8Tj23BRrWnKZXeBruk6wTnsMJbi/lJsk9bsRgVwb6j5q39n0A00gFjbCTaDo5l5XrPVv4DZXftrJExhRF/Ug=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./index.css"/>
    </head>
        

<body>
    <div id="root"></div>
    <script type="text/babel">

        const App = {() => {

            return <>
                {/*首頁*/}
                <Nav></Nav>
                <div className="index">
                    <section className="header">
                        <div className="header-photo"><img src="../img/@1x/Top.png" alt="" /></div>
                        <div className="header-logo"><img src="../logo/@1x/LOGO-Line.svg" alt="" /></div>
                        <div className="header-logo"><img src="../logo/@1x/LOGO-L.svg" alt="" /></div>
                        <div className="header-logo"><img src="../logo/@1x/LOGO-Line.svg" alt="" /></div>

                    </section>

                    {/*搜尋主題*/}
                    <section className="search">
                        <div className="search-bg">
                            <img src="../img/@1x/wave.svg" alt="" />
                        </div>

                        <div className="search-item-all">
                            <div className="search-item">
                                <div className="search-item-bg"><img src="../img/@1x/index-find.jpg" alt="" /></div>
                                <div className="search-item-content"><link href=""/>
                                    <img src="../icon/@1x/magnifier-L.svg" alt=""/>
                                    <p>找咖啡</p>
                                </div>
                            </div>

                            <div className="search-item">
                                <div className="search-item-bg"><img src="../img/@1x/index-fair.jpg" alt="" /></div>
                                <div className="search-item-content"><link href=""/>
                                    <img src="../icon/@1x/Q.svg" alt="" />
                                    <p>公平貿易咖啡</p>
                                </div>
                            </div>

                            <div className="search-item">
                                <div className="search-item-bg"><img src="../img/@1x/index-buy.jpg" alt="" /></div>
                                <div className="search-item-content"><link href=""/>
                                    <img src="../icon/@1x/CoffeeBean.svg" alt="" />
                                    <p>買咖啡</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/*文章 找咖啡*/}
                    <section className="article">
                        <div className="article-title">
                            <div>
                                <p>找咖啡</p>
                                <img src="../title-coco-font/CAFE.png" alt="" />
                            </div>
                            <div>
                                <p className="view-all">View All ❯</p>
                            </div>
                        </div>

                        <div className="article-all">
                            <div className="article-item">
                                <img className="article-item-photo" src="../img/cafe/cafe1.png" alt="" />
                                <p className="title">隱藏在巷弄在地人的老咖啡廳</p>
                                <button className="button"><img src="../icon/@1x/Wifi.svg" alt="有WIFI" />有WIFI</button>
                                <button className="button"><img src="../icon/@1x/Plug.svg" alt="有插座" />有插座</button>
                                <button className="button"><img src="../icon/@1x/Pet.svg" alt="寵物友善" />寵物友善</button>
                            </div>

                            <div className="article-item">
                                <img className="article-item-photo" src="../img/cafe/cafe2.png" alt="" />
                                <p className="title">令人食指大動的咖啡廳鹹食料理</p>
                                <button className="button"><img src="../icon/@1x/mrt.svg" alt="鄰近捷運站" />鄰近捷運站</button>
                                <button className="button"><img src="../icon/@1x/Plug.svg" alt="有插座" />有插座</button>
                                <button className="button"><img src="../icon/@1x/nochat.svg" alt="禁止交談" />禁止交談</button>
                            </div>

                            <div className="article-item">
                                <img className="article-item-photo" src="../img/cafe/cafe3.png" alt="" />
                                <p className="title">最適合友聚時光的下午茶咖啡館</p>
                                <button className="button"><img src="../icon/@1x/Wifi.svg" alt="有WIFI" />有WIFI</button>
                                <button className="button"><img src="../icon/@1x/Time.svg" alt="有限時" />有限時</button>
                            </div>

                            <div className="article-item">
                                <img className="article-item-photo" src="../img/cafe/cafe3.png" alt="" />
                                <p className="title">最適合友聚時光的下午茶咖啡館</p>
                                <button className="button"><img src="../icon/@1x/Wifi.svg" alt="有WIFI" />有WIFI</button>
                                <button className="button"><img src="../icon/@1x/Time.svg" alt="有限時" />有限時</button>
                            </div>

                            <div className="article-item">
                                <img className="article-item-photo" src="../img/cafe/cafe3.png" alt="" />
                                <p className="title">最適合友聚時光的下午茶咖啡館</p>
                                <button className="button"><img src="../icon/@1x/Wifi.svg" alt="有WIFI" />有WIFI</button>
                                <button className="button"><img src="../icon/@1x/Time.svg" alt="有限時" />有限時</button>
                            </div>

                            <div className="article-item">
                                <img className="article-item-photo" src="../img/cafe/cafe3.png" alt="" />
                                <p className="title">最適合友聚時光的下午茶咖啡館</p>
                                <button className="button"><img src="../icon/@1x/Wifi.svg" alt="有WIFI" />有WIFI</button>
                                <button className="button"><img src="../icon/@1x/Time.svg" alt="有限時" />有限時</button>
                            </div>
                        </div>

                    </section>


                    {/*地圖*/}
                    <section className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6978557971224!2d121.52481907394224!3d25.044325837878393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9c0ac903e35%3A0x99603698998bee1f!2zQUJPVVQgSCBDb2ZmZWUg5ZKW5ZWh5buzIOiykyDlt7flrZDmmK_np4HkurrlnJ_lnLDoq4vli7_lgZzou4o!5e0!3m2!1szh-TW!2stw!4v1714566015259!5m2!1szh-TW!2stw"
                            className="google-map"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </section>


                    {/*公平貿易咖啡*/}
                    <section className="coffe">
                        <div className="coffe-item-all">
                            <div className="coffe-item-1">
                                <p>公平貿易咖啡</p>
                                <img src="../title-coco-font/Fair Trade Coffee.png" alt="" />
                                <img src="../img/@1x/FairTradeCoffee01.png" alt="" />
                            </div>

                            <div className="coffe-item-2">
                                <p>針對弱勢的生產者，發展出分別針對屬於自耕農的小農組織和擁有受僱者的農場等兩種公平貿易認證的標準。針對小農組織的公平貿易標準，其要求包括民主決策，確保生產者對於公平貿易組織所投入的輔導金之運用有發言的權利。<br />針對擁有受僱者的農場，其標準需確保勞動者擁有適當的工資，以及加入工會和團體協商的權利。公平貿易認證的農場必須確保沒有強迫勞動、雇用童工、危害健康與安全的情況。根據公平貿易認證的標準，擁有受僱者的農場必須設置一位中間人（joint body）代表勞資雙方。這位中間人決定如何將公平貿易組織所投入的輔導金分配予農場的工人。<br />某些產品，例如咖啡，只有小農組織可以申請公平貿易認證。其他類似茶葉，則兩種組織形式皆可以申請認證。</p>
                            </div>
                        </div>

                        <div className="coffe-2">
                            <div className="wave"><img src="../img/@1x/wave-M.svg" alt="" /></div>

                            <div className="coffe-item-all-2">
                                <div className="coffe-item-2-1"><img src="../img/@1x/circle-txt.svg" alt="" /></div>
                                <div className="coffe-item-2-2"><p>Buy It Now !</p></div>
                            </div>
                        </div>

                    </section>

                    {/*咖啡豆販賣產品*/}
                    <section className="product">
                        <div className="product-title">
                            <div>
                                <p>買咖啡</p>
                                <img src="../title-coco-font/ONLINE SHOP.png" alt="" />
                            </div>
                            <div>
                                <p className="view-all">View All ❯</p>
                            </div>
                        </div>

                        <div className="product-all">
                            <div className="product-item">
                                <img src="../img/@1x/product-M.png" alt="" />
                                <div className="product-item-btn">
                                    <button>#巴西</button>
                                    <button>#日曬</button>
                                    <button>#中深焙</button>
                                </div>
                            </div>

                            <div className="product-item">
                                <img src="../img/@1x/product-M.png" alt="" />
                                <div className="product-item-btn">
                                    <button>#巴西</button>
                                    <button>#水洗</button>
                                    <button>#淺焙</button>
                                </div>
                            </div>

                            <div className="product-item">
                                <img src="../img/@1x/product-M.png" alt="" />
                                <div className="product-item-btn">
                                    <button>#巴西</button>
                                    <button>#日曬</button>
                                    <button>#中深焙</button>
                                </div>
                            </div>

                            <div className="product-item">
                                <img src="../img/@1x/product-M.png" alt="" />
                                <div className="product-item-btn">
                                    <button>#巴西</button>
                                    <button>#日曬</button>
                                    <button>#中深焙</button>
                                </div>
                            </div>

                            <div className="product-item">
                                <img src="../img/@1x/product-M.png" alt="" />
                                <div className="product-item-btn">
                                    <button>#巴西</button>
                                    <button>#日曬</button>
                                    <button>#中深焙</button>
                                </div>
                            </div>

                            <div className="product-item">
                                <img src="../img/@1x/product-M.png" alt="" />
                                <div className="product-item-btn">
                                    <button>#巴西</button>
                                    <button>#日曬</button>
                                    <button>#中深焙</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="footer">
                        <hr />
                        <p> © 2024 POCA. | Contact Us ❯</p>
                    </div>
                </div>
            </>

        }}

        ReactDOM.createRoot(document.getElementById('root')).render(<App />);

    </script>
</body>
</html>

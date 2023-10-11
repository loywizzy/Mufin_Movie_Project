import { defineStore } from 'pinia'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            products: [
                { quantity: 1, id: 1, name: "An Action Hero", price: 800, year: "2022", link: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2022/action-hero/action-hero-poster-6.jpg", score: "7.0", time: "2h 10m", director: "Anirudh Iyer" },
                { quantity: 1, id: 2, name: "X", price: 800, year: "2022", link: "https://ae01.alicdn.com/kf/Se0320176c21e460d9c7fa5e8854e79d7U/Hot-Rare-Movie-X-2022-Art-SILK-POSTER-Wall-Art-Home-Decorative-painting.jpg", score: "6.6", time: "1h 45m", director: "Ti West" },
                { quantity: 1, id: 3, name: "WandaVision", price: 800, year: "2021", link: "https://sportshub.cbsistatic.com/i/2022/02/01/901bdd4c-62bb-4566-81fd-6861fed12f91/wandavision-shattered-reality-poster.jpg?auto=webp&width=854&height=1139&crop=0.75:1,smart", score: "7.9", time: "5h 50m", director: "Jac Schaeffer" },
                { quantity: 1, id: 4, name: "Dune", price: 800, year: "2021", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7pnjQLgaFURCU1CTbumIhmXx5KB-2VWwi3cDG8xfydWthwSFrPR19bXbkkJBBiaBbuw&usqp=CAU", score: "8.0", time: "2h 35m", director: "Denis Villeneuve" },
                { quantity: 1, id: 5, name: "Sing 2", price: 800, year: "2021", link: "https://www.themoviedb.org/t/p/original/9x4qpmPStbs27G95PMdkOSQ1JTY.jpg", score: "7.4", time: "1h 50m", director: "Garth Jennings / Christophe Lourdelet" },
                { quantity: 1, id: 6, name: "Oscar Nominated Short Films", price: 800, year: "2020", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoBaMJNXTlKRknYhJgCfG5jLkkYycXJ5hwSlnk9JT5ybWye7MlpweFVcgN1aClK_g_Pw&usqp=CAU", score: "7.9", time: "2h 40m", director: "Canada / United States" },
                { quantity: 1, id: 7, name: "Comedy Couple", price: 800, year: "2020", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R0Z_fhd5zxr5A9Y9xeMIr9c1KEwK-VdAsYKrhd5dDKOLPra-U-9W17HwWBw0iMGyw0o&usqp=CAU", score: "7.4", time: "1h 57m", director: "Nachiket Samant" },
                { quantity: 1, id: 8, name: "Last Night in Soho", price: 800, year: "2021", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnumjsxll__KWi5UkousLJ1bsvwh9b74v9bWiMYVHKHlzc3urQ88pJevQuz--CpCBCk4&usqp=CAU", score: "7", time: "1h 56m", director: "Edgar Wright" },
            ],
            product1: [
                { quantity: 1, id: 9, name: "Spider-Man: Beyond the Spider-Verse", price: 800, year: "2023", link: "https://m.media-amazon.com/images/M/MV5BYWJlNThmNWMtZWE5Zi00YWJiLWJiOTQtZWY1Y2I3ZmNhMDYwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg", score: "8.7", time: "2h 20m", director: "Joaquim Dos /SantosKemp PowersJustin/ K. Thompson" },
                { quantity: 1, id: 10, name: "Dungeons & Dragons: Honor Among Thieves", price: 800, year: "2023", link: "https://static.displate.com/857x1200/displate/2023-04-28/dd2c5d12bc5c640c1375fd132f225679_842ac8baa3fed855e44caccaf7714d6c.jpg", score: "7.3", time: "2h 14m", director: "John Francis Daley / Jonathan Goldstein" },
                { quantity: 1, id: 11, name: "Blue's Big City Adventure", price: 800, year: "2022", link: "https://imgsrc.cineserie.com/2023/06/2423989.jpg?ver=1", score: "6.3", time: "1h 22m", director: "Matt Stawski" },
                { quantity: 1, id: 12, name: "Stasikomödie", price: 800, year: "2022", link: "https://de.web.img3.acsta.net/pictures/22/04/01/12/08/1373125.jpg", score: "5.6", time: "1h 56m", director: "Leander Haußmann" }
            ],
            cartItems: []
        }
    },
    getters: {
        countCartItems() {
            return this.cartItems.length;
        },
        getCartItems() {
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
            } else {
                item.quantity = 1;
                this.cartItems.push(item);
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);;
        }

    },
})
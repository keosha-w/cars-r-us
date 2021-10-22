const database = {
    paintColors: [
        {
            id: 1, 
            paintColor: "Silver",
            price: 100.00, 
        },
        {
            id: 2, 
            paintColor: "Midnight Blue",
            price: 120.00, 
        },
        {
            id: 3, 
            paintColor: "Firebrick Red",
            price: 150.00, 
        },
        {
            id: 4, 
            paintColor: "Spring Green",
            price: 130.00, 
        }
    ],
    interiors: [
        {
         id: 1,
         fabricAndColor: "Beige Fabric",
         price: 900.00,
        },
        {
         id: 2,
         fabricAndColor: "Charcoal Fabric",
         price: 700.00,
        },
        {
         id: 3,
         fabricAndColor: "White Leather",
         price: 1200.00,
        },
        {
         id: 4,
         fabricAndColor: "Black Leather",
         price: 1000.00,
        }
    ],
    technologies: [
        {
            id: 1, 
            package: "Basic Package (basic sound system)",
            price: 500.00, 
        },
        {
            id: 2, 
            package: "Navigation Package (includes integrated navigation controls)",
            price: 1200.00, 
        },
        {
            id: 3, 
            package: "Visibility Package (includes side and reat cameras)",
            price: 2000.00, 
        },
        {
            id: 4, 
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 3000.00, 
        }
    ],
    wheels: [
        {
           id: 1, 
           package: "17-inch Pair Radial",
           price: 500.00,  
        },
        {
           id: 2, 
           package: "17-inch Pair Radial Black",
           price: 700.00,  
        },
        {
           id: 3, 
           package: "18-inch Pair Spoke Silver",
           price: 900.00,  
        },
        {
           id: 4, 
           package: "18-inch Pair Spoke Black",
           price: 1200.00,  
        }
    ],
    carOrders: [
        {
            
        }
    ],

}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
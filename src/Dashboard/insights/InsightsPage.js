import React from "react";
import "./InsightsPage.css";

const Insights = () => {
    return(
        <div style={{justifyContent:'center',alignItems:'center',marginLeft:150, marginRight:150}} className="container">
             <h1 className="headings">Overview:</h1>
                <p className="textView">
                    Presenting a feature-rich cooking app that offers customers a 
                    vast collection of recipes to browse and enjoy. Users can easily
                    search for recipes by entering parameters such as breakfast, 
                    desserts, main course, or dietary restrictions. Users can also 
                    post and share their unique recipes with the community. The software 
                    provides step-by-step instructions, culinary tips, and nutritional 
                    information to assist users in making delicious meals. With a wide 
                    range of recipes and a user-friendly design, this app seeks to foster 
                    a vibrant culinary community and spark culinary creativity.
                 </p>
             <h1 className="headings">Problem:</h1>
                <p className="textView">
                    In this busy world, many people cannot find various recipes interactively. 
                    So, we provide an interactive way of accessing different recipes through our app.
                </p>
             <h1 className="headings">Users Goals:</h1>
                <p className="textView"> 
                    Users can easily access the app and can understand the recipes. Users can easily download
                    the app and can use it offline. They can easily try out the recipes and can taste the 
                    authentic flavors of food. It is more useful to the people who are living far from their country.
                </p>
            <h1 className="headings">Actions:</h1>
                <p className="textView">
                Users can perform actions like searching the recipes and uploading the recipes. They can also
                 be able to modify their profile according to their interest.
                </p>
        </div>
    )
}
export default Insights;
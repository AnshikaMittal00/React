# react 
jsx-is not html in js-Parcel-Babel(transpiling our code)
react element
# react hooks
normal js utility functions 
<!-- -useState() -->
.use only in component function ,keep it on top as local state variable 
.never use in if-else ,for and functions
<!-- -useEffect() -->
if ([])renders only after initial render 
if () renders every time a component renders
if [any dependencies] render after the change of that dependency everytime 
# 2 type Routing web pages
-client side routing 
-server side routing 
Universal Styles
* {
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

/* Page Container - Centers and constrains the width */
.container {
    max-width: 1200px;
    margin: 0px auto;
    padding: 20px;
}

/* Header & Navigation */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Vertically aligns items */
    border: 1px solid black;
    padding: 15px 20px; /* Consistent padding */
      margin:15px;
}

.logo {
    width: 50px;
}

.nav-items ul {
    display: flex;
    gap: 15px; /* Adds space between nav items */
    list-style-type: none;
  
}

.nav-items ul li {
    font-size: 20px;
}

.login {
    padding: 0 20px;
    cursor: pointer;
}

/* -------------------------------------------------------------------------- */
/* Main Body Layout */
/* -------------------------------------------------------------------------- */
.body {
    padding: 20px 0;
}

/* Search and Filter Section */
.filter {
    display: flex;
    align-items: center;
    gap: 15px; /* Adds space between search bar and buttons */
    margin-bottom: 20px;
}

.search {
    display: flex;
    gap: 10px;
    margin:15px;
   
}

.search-Box {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.search button{
    padding: 5px;
    border:2px solid #ccc;
    border-radius: 4px;

}
.search button:active{
     background: #938c8c;
   border: 2px solid black;}


.res-cards {
    display: grid;
    /* Creates a responsive grid with a min-max function */
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px; /* Consistent space between all cards */
    margin:15px;
}

.cards {
    height: 400px;
    background-color: rgb(250, 233, 212);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    white-space: normal;
    overflow-wrap: break-word; 
     word-wrap: break-word;     
    margin: 5px 0; 
}
.link{
    text-decoration: none;
    color: #333;
    line-height: 1.5;
    
}



.cards:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.card-logo {
    width: 100%;
    height: 50%;
    border-radius: 8px;
    object-fit: cover;
}

/* Other styles */
.filter-btn {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.filter-btn:active{
   background: #938c8c;
   border: 2px solid black;
}

.shimmer-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.shimmer-card {
    height: 400px;
    background-color: #e0e0e0;
    border-radius: 8px;
    animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
    0% {
        background-color: #e0e0e0;
    }
    50% {
        background-color: #f0f0f0;
    }
    100% {
        background-color: #e0e0e0;
    }
}

@media (max-width: 600px) {
    .res-cards {
        flex-direction: column;
        align-items: center;
    }

    .cards, .shimmer-card {
        flex-basis: 90%;
        max-width: 90%;
    }
}


.filter{
   display: flex;
}

.user-card{
    border: 2px solid black;
    margin-top: 20px;
}
.category{
 display: flex;
}
.button{
    margin: 10px;
    padding:5px;
    border:rgb(227, 217, 217) 1px solid;
    background: transparent;
    border-radius: 10%;
    cursor: pointer;
}
.button.veg {
  border: 2px solid rgb(53, 154, 53); 
}
.button.non-veg{
 border: 2px solid rgb(246, 42, 11);
}
.button.Bestseller{
    border:2px solid rgb(234, 146, 113);
}
ul {
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
}

li {
  border-bottom: 1px solid #e0e0e0; 
  padding: 15px; 
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s ease; /* Smooth hover effect */
}
li:hover {
  background-color: #f5f5f5; /* Light gray background on hover */
  cursor: pointer;
}

li:active {
  background-color: #e0e0e0; /* Darker gray background when clicked */
}
.info{
 padding: 15px;
 line-height: 35px;
}
.info h1{
    color:darkgreen;
}
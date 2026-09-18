# REPASO

cambiar color h1

centrarlos en el eje vettical

añadir div con una clase

centrar el div

body {
    background-color: #c4fff0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    color: #ff0000;
    font-size: 3rem;
    margin-bottom: 1rem;
}

h2 {
    color: #000;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.container {
    background-color: #fff;
    padding: 3rem;
    margin: 0;
    width: 40%;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.container:hover {
    background-color: #49ec17;    
}
html, body {
  background-image: url(wallpaper.jpg);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  }
  
  #popup {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  opacity: 0;
  }
  #mainForm{
    display: none;
    position: absolute;
    top:50%;
    left: 50%;
    background-color: cyan;
    transform: translate(-50%, -50%);
    border: 2px solid black;
    padding: 1vw;
  }
  #btn{
    width: 100px;
    color: blue;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .field
{
  width:fit-content-content;
}
  
  #frm{
    padding: 2vw;
  }
  
  #closeForm{
  float: right;
  }
@media (max-width: 960px)
{
  #mainForm{
    width:350px;
  }
}

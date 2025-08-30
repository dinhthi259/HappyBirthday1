let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    
    
    
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';
    document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'none';
            document.getElementById('sadGifContainer11').style.display = 'none';
            document.getElementById('sadGifContainer12').style.display = 'none';
            document.getElementById('sadGifContainer13').style.display = 'none';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 
    'Em biết là chị hong bỏ em mà<br>Chị mau xếp lại giường đi<br>tối mai em qua đó nhaaaaaa';


  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = 'Chị ơi si nghĩ lại đi mà';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
    
        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = 'Chị bỏ mặc em thiệt àaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
           
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Chị hong nhận em là em phải ở ngoài thùng rác đó';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = 'Em nói thiệt chị hong nuôi em là em bị vứt thiệt đóooo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'block';

            // Hacer que el botón "Sí" crezca
    
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Em hong muốn sống ngoài thùng rác đâu chị ơiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'block';

            // Hacer que el botón "Sí" crezca
        
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Em cũng hết tiền gòi, giờ em biết sống sao';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'block';


            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Haiz hong có ai iu mình cả';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'block';

            // Hacer que el botón "Sí" crezca

            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Chị hong si nghĩ lại thiệt àaaaaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'block';


  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Hong chịu hong chịu âuuuuuu';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'block';


       
            noButtonState++;
            break;

        case 9:
           
            document.getElementById('noBtn').innerHTML = 'Chị ơi, em hứa em sẽ ngoan màaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'block';

          
            noButtonState++;
            break;

        case 10:
           
            document.getElementById('noBtn').innerHTML = 'Em sẽ hong cãi lời chị đâuuuuu';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'block';
    
            noButtonState++;
            break;
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'Chị nhìn nè em là một con gấu bông rất dễ huông óooo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'none';
            document.getElementById('sadGifContainer11').style.display = 'block';
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'Chị hong nuôi em thiệt saoooo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'none';
            document.getElementById('sadGifContainer11').style.display = 'none';
            document.getElementById('sadGifContainer12').style.display = 'block';

    
            noButtonState++;
            break;
        
        case 13:
           
            document.getElementById('noBtn').innerHTML = 'Em năn nỉ chị đó, đừng bỏ em màaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'none';
            document.getElementById('sadGifContainer11').style.display = 'none';
            document.getElementById('sadGifContainer12').style.display = 'none';
            document.getElementById('sadGifContainer13').style.display = 'block';
         
            noButtonState++;
            break;
        
        case 14:
           
            document.getElementById('noBtn').innerHTML = 'Nhận em đi màaaaaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'none';
            document.getElementById('sadGifContainer11').style.display = 'none';
            document.getElementById('sadGifContainer12').style.display = 'none';
            document.getElementById('sadGifContainer13').style.display = 'block';

            
            noButtonState++;
            break;
        
        case 15:
           
            document.getElementById('noBtn').innerHTML = 'Nhaaaaaaaaaaaaaaaaaaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';


          
            
            break;
        
     
              
                
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});



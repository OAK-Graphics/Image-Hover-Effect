function cardHover(t){

    const cardItemAll = document.querySelectorAll('.card__item');
    const cardImageAll = document.querySelectorAll('#cardImage');
    const cardNthChild = document.querySelectorAll('.card__item:nth-child(n)');
    const cardFirstChild = document.querySelector('.card__item:nth-child(1)');
    const cardSecondChild = document.querySelector('.card__item:nth-child(2)');
    const cardThirdChild = document.querySelector('.card__item:nth-child(3)');
    const imageNthChild = document.querySelectorAll('#cardImage:nth-child(n)');
    const imageFirstChild = document.querySelector('#cardImage:nth-child(1)');
    const imageSecondChild = document.querySelector('#cardImage:nth-child(2)');
    const imageThirdChild = document.querySelector('#cardImage:nth-child(3)');
    const imageArray = Array.prototype.slice.call(imageNthChild);

    cardItemAll.forEach(e => {

        if (e.classList.contains('active')) {

            e.classList.remove('active');            
        }
        
    });

    t.classList.add('active');

    imageArray.forEach(function(i) {

        cardImageAll.forEach(e => {

            if (e.classList.contains('active')) {
    
                e.classList.remove('active');
    
                e.classList.remove('show');  

                e.classList.add('hide'); 

            } 
            
        });

        if (t == cardFirstChild) {
    
            imageFirstChild.classList.remove('hide');
            
            imageFirstChild.classList.add('show');
    
            imageFirstChild.classList.add('active');
    
            console.log(t);
    
        }
    
        if (t == cardSecondChild) {
    
            imageSecondChild.classList.remove('hide');
            
            imageSecondChild.classList.add('show');
    
            imageSecondChild.classList.add('active');
    
            console.log(t);
    
        }
    
        if (t == cardThirdChild) {
    
            imageThirdChild.classList.remove('hide');
            
            imageThirdChild.classList.add('show');
    
            imageThirdChild.classList.add('active');
    
            console.log(t);
    
        }

        console.log(i);
        
    });

}
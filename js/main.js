function cardHover(t){

    const cardItemAll = document.querySelectorAll('.card__item');
    const cardImageAll = document.querySelectorAll('#cardImage');
    const cardFirstChild = document.querySelector('.card__item:nth-child(1)');
    const cardSecondChild = document.querySelector('.card__item:nth-child(2)');
    const cardThirdChild = document.querySelector('.card__item:nth-child(3)');
    const imageFirstChild = document.querySelector('#cardImage:nth-child(1)');
    const imageSecondChild = document.querySelector('#cardImage:nth-child(2)');
    const imageThirdChild = document.querySelector('#cardImage:nth-child(3)');

    cardItemAll.forEach(e => {

        if (e.classList.contains('active')) {

            e.classList.remove('active');            
        }
        
    });

    t.classList.add('active');

    if (t = cardFirstChild) {

        cardImageAll.forEach(e => {

            if (e.classList.contains('active')) {
    
                e.classList.remove('active');            
            }
            
        });

        imageFirstChild.classList.add('active');

    }

    if (t = cardSecondChild) {

        cardImageAll.forEach(e => {

            if (e.classList.contains('active')) {
    
                e.classList.remove('active');            
            }
            
        });

        imageSecondChild.classList.add('active');

    }

    if (t = cardThirdChild) {

        cardImageAll.forEach(e => {

            if (e.classList.contains('active')) {
    
                e.classList.remove('active');            
            }
            
        });

        imageThirdChild.classList.add('active');

    }

}
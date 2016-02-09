$(document).ready(function() {
    //inicialni zavolani pri loadu stranky
    addCustomClass('.icotile', 'eq-small', 0, 200);
    
    addCustomClass('.visitcard', 'eq-small', 0, 300);
    addCustomClass('.visitcard', 'eq-medium', 301, 450);
    addCustomClass('.visitcard', 'eq-large', 451, 850);
    
    addCustomClass('.testimonial', 'eq-small', 0, 399);
    
    addCustomClass('.module', 'eq-small', 0, 499);
    addCustomClass('.module', 'eq-medium', 500, 849);
    
    addCustomClass('.publication', 'eq-small', 0, 449);
    
    addCustomClass('.contact-panel', 'eq-small', 0, 250);
    
    //zavolani pri resize
    $( window ).resize(function() {
        addCustomClass('.icotile', 'eq-small', 0, 200);
        
        addCustomClass('.visitcard', 'eq-small', 0, 300);
        addCustomClass('.visitcard', 'eq-medium', 301, 450);
        addCustomClass('.visitcard', 'eq-large', 451, 850);
        
        addCustomClass('.testimonial', 'eq-small', 0, 399);
        
        addCustomClass('.module', 'eq-small', 0, 499);
        addCustomClass('.module', 'eq-medium', 500, 849);
        
        addCustomClass('.publication', 'eq-small', 0, 449);
        
        addCustomClass('.contact-panel', 'eq-small', 0, 250);
    });
});
        
//objectClass je nutno predrazovat ".", naopak newClass bez tecky
//trida je v objektu pritomna od minWidth do maxWidth
function addCustomClass(objectClass, newClass, minWidth, maxWidth) {
    $(objectClass).each(function() {
        if($(this).width() > minWidth && $(this).width() < maxWidth) {
            $(this).addClass(newClass);
        } else {
            $(this).removeClass(newClass);
        }
    });
}
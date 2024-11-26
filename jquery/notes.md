# JQuery Notes

## Jquery Syntax
```jquery
 $(document).ready(function(){

  // jQuery methods go here...

}); 
```
OR
```jquery
 $(document).ready(function(){

  // jQuery methods go here...

}); 
```
## Jquery Selector 

## Jquery Event Methods
1. ready()
2. click
3. dblclick
4. mouseenter
5. mouseleave
6. mousedown
7. mouseup
8. focus
9. blur -> execute when the form field loses focus
10. on - The on() method attaches one or more event handlers for the selected elements.
Attach a click event to a p element.
```jquery
$("p").on("click", function(){
  $(this).hide();
}); 
```

## Jquery Effects
1. hide() and show()
```jquery
$(selector).hide(speed,callback);
$(selector).show(speed,callback); 
```
speed --> fast, slow, millisecond

2. toggle(speed, callback)
3. Fading(speed,callback)
- fadeIn(speed,callback)
- fadeOut(speed,callback)
- fadeToggle(speed,callback)
- fadeTo(speed,opacity,callback)

3. Sliding
- slideDown(speed, callback)
- slideUp(speed, callback)
- slideToggle(speed, callback)

4. animation
- syntax
```jquery
$(selector).animate({params},speed,callback);
```
- one properties
```jquery
$("button").click(function(){
  $("div").animate({left: '250px'});
});  
```
- multiple properties
```jquery
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});
```
- relative values (increase++)
```jquery
$("button").click(function(){
  $("div").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  });
});  
```
- predefine values
```jquery
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height: 'toggle'
    });
  });
});
```
- 
```
$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
```

-

5. stop
```jquery
 $(selector).stop(stopAll,goToEnd);
```

6. callback
```jquery
$("button").click(function(){
  $("p").hide("slow", function(){
    alert("The paragraph is now hidden");
  });
}); 
```



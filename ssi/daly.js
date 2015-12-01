$(function ()
 {  var h = 40, t = $('#ta'), max = t[0].scrollHeight, min = 50;

	 $('.read-next').on('click', function (event)

	  {

	   var H = t.height();

	   if(H == max){H = min}

	   else if (H  + h > max){H = max}

	   else {H += h};

	   t.height(H);

	   $(this).text(H == max ? 'Скрыть этот бред' : 'Читать далее...')

	   return false

	  })

	  })
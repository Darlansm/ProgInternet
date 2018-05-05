
$('p').css(
{
'color' : 'red',
'font-size':'13pt',
'font-weight':'bold',
'font-family':'arial'
}    
);

$('p').attr('id','casa');
$('p').append(' se ainda gosto dela');

var txt = $('<p>Respondi tenho ódio</p>');
$('p').after(txt);

var cor = $('#casa').css('color');
var conteudo = $('#casa').html();
console.log(conteudo);
//alert(cor);

$('#casa+p').append(' e morro de amor por ela');

$('body').append('Hoje estamos juntinhos');

$('body').prepend('<h1> Entre tapas e beijos</h1>');
$('body').before('<h2>Leandro e Leonardo</h2>');
$('h2').after('Som livre');

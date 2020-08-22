function incrementValue(e) {
   e.preventDefault();
   var fieldName = $(e.target).data('field');
   var parent = $(e.target).closest('div');
   var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
 
   if (!isNaN(currentVal)) {
     parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
   } else {
     parent.find('input[name=' + fieldName + ']').val(0);
   }
 }
 
 function decrementValue(e) {
   e.preventDefault();
   var fieldName = $(e.target).data('field');
   var parent = $(e.target).closest('div');
   var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
 
   if (!isNaN(currentVal) && currentVal > 1) {
     parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
   } else {
     parent.find('input[name=' + fieldName + ']').val(1);
   }
 }
 
 $('.input-group').on('click', '.button-plus', function(e) {
   incrementValue(e);
 });
 
 $('.input-group').on('click', '.button-minus', function(e) {
   decrementValue(e);
 });

//  Sidebar
 $(document).ready(function() {
  // SideNav Button Initialization
  $(".button-collapse").sideNav2();
  // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(sideNavScrollbar);
  });
/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {
    /* Name Arrays: Customize names to change possible output */
    this.last_names = [' the Chef', ' Digital', ' Wise', ' Knight', ' Wrecka', ' the Genius', ' the Zoo Keeper', ' the Monk', ' the Scientist', ' the Disciple', ' the Darkman', ' Pellegrino', ' the Ill Figure', ' Rocks The World', ' the Baptist', ''];
    this.first_names = ['Inspectah ', 'Masta ', 'Poppa ', 'Five Foot ', 'Ghostface ', 'Old Dirty ', 'Chief ', ''];
}

function random_item(array) {
    return array[Math.floor(array.length * Math.random())];
}

function adjust_name(name) {
  var random_num = Math.ceil(4 * Math.random());
  switch (random_num) {
      case 1:
          return name.toUpperCase().split("").join(".");
          break;
      case 2:
          return name[0].toUpperCase();
          break;
      case 3:
          return name[0].toUpperCase() + "ZA";
          break;
      default:
          return name;
  }
}

$(document).ready(function() {
    var engine = new Generator;

    $("#enter").click(function(){

        var input = $("#user-input").val();

        if (input) {

            var rap_name = generateRapName(input);
            $("#response-name").html(rap_name);
            
            $("#no-input").css('display', 'none');            
            $("#response-name").css('display', 'block');

        } else {

            $("#no-input").css('display', 'block');
            $("#response-name").css('display', 'none');

        }

    });

    function generateRapName(input) {
        var first_name = random_item(engine.first_names);
        var last_name = random_item(engine.last_names);
        var adjusted_input = adjust_name(input)

        return first_name + adjusted_input + last_name;
    }
});

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write ( "\n This is a Miles to Kilometers converter. "
                    +  "\n Please, select table you want: " 
                    +  "\n k for Kilometers "
                    +  "\n m for miles "
                    +  "\n p for pounds "
                    +  "\n x for quit \n" ) ;
                        
                        
process.stdin.on( "data", function( input_from_user ) 

{

    var distance_in_miles = 10 

    var distance_by_user = 10 

    var pound_value = 10

    var number_to_print = 0  ;

    var number_to_convert = 0 ;

    var number_to_pound = 0 ;

    var given_letter = ( String ( input_from_user ) ) [0] ;

    if ( given_letter == 'm' || given_letter == 'M' )
    {


        process.stdout.write ("\n      Miles        Kilometers \n" ) ;
            
        while ( number_to_print < 10 )
            {
                distance_in_kilometers =  1.6093 * distance_in_miles ;

                tools.printf( "\n %10.2f        %10.2f",
                     distance_in_miles,  distance_in_kilometers ) ;
        
                distance_in_miles = distance_in_miles + 10
                number_to_print ++ ;
        
            }
    
    }
    if ( given_letter == 'K' || given_letter == 'k' )
    {
        process.stdout.write ( "\n      Kilometers        Miles \n" ) ; 

        while ( number_to_convert < 10 )
            {
                distance_in_conversion = 0.621371 * distance_by_user ;
            
                tools.printf( "\n %10.2f          %10.2f",
                    distance_by_user,  distance_in_conversion ) ;
            
                distance_by_user = distance_by_user + 10 ;
                number_to_convert ++ ;

            }
    }

    if (given_letter == 'p' || given_letter == 'P' )
    {
        process.stdout.write ( "\n      Pounds        Kilograms \n" ) ;

        while ( number_to_pound < 10 )
            {
                kilogram_value = 0.4536 * pound_value
                tools.printf( "\n %10.2f          %10.2f",
                    pound_value,  kilogram_value ) ;

                pound_value = pound_value + 10 ;
                number_to_pound ++ ;
            }
    }

    var user_selection = String ( input_from_user ) .charAt ( 0 ) ;

    if (given_letter == 'x' || given_letter == 'X' )
    {
        process.stdout.write ( "\n" ) ;
        process.exit() ;
    }

    process.exit() ;

} ) ;
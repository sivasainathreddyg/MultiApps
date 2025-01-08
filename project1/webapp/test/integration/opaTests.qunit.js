sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/AirlineList',
		'project1/test/integration/pages/AirlineObjectPage'
    ],
    function(JourneyRunner, opaJourney, AirlineList, AirlineObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAirlineList: AirlineList,
					onTheAirlineObjectPage: AirlineObjectPage
                }
            },
            opaJourney.run
        );
    }
);
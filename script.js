$(document).ready(function () {
  var skillsShown = {
    'responsibilityContent': false,
    'organizationContent': false,
    'independentWorkContent': false,
    'collaborationContent': false,
    'initiativeContent': false,
    'selfRegulationContent': false
  };

  $('.collapse').on('shown.bs.collapse', function () {
    skillsShown[this.id] = true;

    // Check if all skills have been shown
    if (Object.values(skillsShown).every((val) => val === true)) {
      // Set a delay of 1 minutes (60000 milliseconds)
      setTimeout(function () {
        $('#summaryContent').collapse('show');
      }, 60000);
    }
  });
});
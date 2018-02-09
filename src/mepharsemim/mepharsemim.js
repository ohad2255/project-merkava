require('../common/common');

$(document).ready(function() {

	// All Elements in the UI
	var $elements = {
		mepharsemim: $(".mepharsemim"),
		subjects: $(".subject"),
		subjectOptions: $(".subject-option"),
		toggleAllMepharsemim: $(".toggle-all-mepharsemim"),
		toggleAllSubjectsOptions: $(".toggle-all-subject-options"),
		myListCount: $(".my-list-count"),
		subjectWrapper: $(".subject-wrapper")
	}

	// All the data for the UI
	var myList = {
		selectedSubjectOptions: 0,
		$elements: {
			mepharsemim: $(),
			subjects: $(),
			subjectOptions: $()
		}
	}

	// User actions
	$elements.toggleAllMepharsemim.click(toggleAllMepharsemim)
	$elements.mepharsemim.click(toggleMepharsem)
	$elements.toggleAllSubjectsOptions.click(toggleAllSubjectsOptions)
	$elements.subjectWrapper.click(toggleSubjectOptions);

	// Update the UI
	function updateCheckBoxes() {
		var isAllMepharsemimSelected = $elements.mepharsemim.length === myList.$elements.mepharsemim.length;
		var isAllSubjectsOptionsSelected = $elements.subjectOptions.length === myList.$elements.subjectOptions.length;

		// Empty everything before updating the UI
		Object.keys($elements).forEach(function(elementKey) {
			$elements[elementKey].prop('checked', false);
		})

		// Select everything from myList
		Object.keys(myList.$elements).forEach(function(elementKey) {
			myList.$elements[elementKey].prop('checked', true);
		})

		// Update count
		$elements.myListCount.html(myList.selectedSubjectOptions);

		// Update toggleAll checkboxes
		$elements.toggleAllMepharsemim.prop('checked', isAllMepharsemimSelected);
		$elements.toggleAllSubjectsOptions.prop('checked', isAllSubjectsOptionsSelected);
	}

	// user action functions
	function toggleAllMepharsemim() {

		// take the clicked element
		var $clicked = $(this);

		// Select everything
		if ($clicked.prop("checked")) {
			Object.keys(myList.$elements).forEach(function(elementKey) {
				myList.$elements[elementKey] = $elements[elementKey];
			})
			myList.selectedSubjectOptions = $elements.subjectOptions.length;
		}

		// Deselect everything
		else {
			Object.keys(myList.$elements).forEach(function(elementKey) {
				myList.$elements[elementKey] = $();
			})
			myList.selectedSubjectOptions = 0;
		}

		// Call for UI update
		updateCheckBoxes()
	}

	function toggleAllSubjectsOptions() {

		// take the clicked element
		var $clicked = $(this);

		// Select all subjects options
		if ($clicked.prop("checked")) {
			["subjects", "subjectOptions"].forEach(function(elementKey) {
				myList.$elements[elementKey] = $elements[elementKey];
			})
			myList.selectedSubjectOptions = $elements.subjectOptions.length;
		}

		// Deselect everything
		else {
			Object.keys(myList.$elements).forEach(function(elementKey) {
				myList.$elements[elementKey] = $();
			})
			myList.selectedSubjectOptions = 0;
		}

		// Call for UI update
		updateCheckBoxes()
	}

	function toggleMepharsem() {
		// take the clicked element
		var $clicked = $(this);
		var mepharsemId = $clicked.prop("id");
		var mepharsemSubjects = $("[mepharsemId='" + mepharsemId + "']")
		var mepharsemSubjectsOptions = mepharsemSubjects.parents(".form-item-wrapper").find(".subject-option")

		//select mepharsem
		if ($clicked.prop("checked")) {
			$.merge(myList.$elements.mepharsemim, $clicked.get())
			$.merge(myList.$elements.subjects, mepharsemSubjects.get())
			$.merge(myList.$elements.subjectOptions, mepharsemSubjectsOptions.get())
		}

		// Deselect mepharsem
		else {
			var filteredMepharsemim = $($.grep(myList.$elements.mepharsemim, function(mepharsem) {
				return $clicked.get(0) !== mepharsem 
			}))

			var filteredSubject = $($.grep(myList.$elements.subjects, function(subject){
				return !mepharsemSubjects.has(subject);
			}))

			var filteredSubjectOption = $($.grep(myList.$elements.subjectOptions, function(subjectOption){
				return !mepharsemSubjectsOptions.has(subjectOption);
			}))	

			myList.$elements.mepharsemim = filteredMepharsemim;
			myList.$elements.subjects = filteredSubject;
			myList.$elements.subjectOptions = filteredSubjectOption;
		}

		// Call for UI update
		updateCheckBoxes()
	}

	function toggleSubjectOptions() {
		$(this).next().toggleClass('d-flex');
	}
});

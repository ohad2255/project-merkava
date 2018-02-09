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
	$elements.toggleAllSubjectsOptions.click(toggleAllMepharsemim)
	
	$elements.mepharsemim.click(toggleMepharsem)
	$elements.subjects.click(toggleSubject)
	$elements.subjectOptions.click(toggleSubjectOption)
	
	$elements.subjectWrapper.click(toggleSubjectOptions)

	// Update the UI
	function updateCheckBoxes() {
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
		myList.selectedSubjectOptions = myList.$elements.subjectOptions.length;
		$elements.myListCount.html(myList.selectedSubjectOptions);

		// Update toggleAll checkboxes
		$elements.toggleAllMepharsemim.prop('checked', isAllSubjectsOptionsSelected);
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
		}

		// Deselect everything
		else {
			Object.keys(myList.$elements).forEach(function(elementKey) {
				myList.$elements[elementKey] = $();
			})
		}

		// Call for UI update
		updateCheckBoxes()
	}

	function toggleMepharsem() {
		// take the clicked element
		var $clicked = $(this);
		var mepharsemId = $clicked.prop("id");
		var mepharsemSubjects = $("[data-mepharsem-id='" + mepharsemId + "']")
		var mepharsemSubjectsOptions = mepharsemSubjects.parents(".subject-wrapper").find(".subject-option")

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
				return mepharsemSubjects.get().indexOf(subject) === -1;
			}))

			var filteredSubjectOption = $($.grep(myList.$elements.subjectOptions, function(subjectOption){
				return mepharsemSubjectsOptions.get().indexOf(subjectOption) === -1;
			}))	

			myList.$elements.mepharsemim = filteredMepharsemim;
			myList.$elements.subjects = filteredSubject;
			myList.$elements.subjectOptions = filteredSubjectOption;
		}

		// Call for UI update
		updateCheckBoxes()
	}

	function toggleSubject() {
		// take the clicked element
		var $clicked = $(this);
		var mepharsemId = $clicked.data("mepharsem-id");
		var $mepharsem = $("#" + mepharsemId);
		var mepharsemSubjectsOptions = $clicked.parents(".subject-wrapper").find(".subject-option")
		var isMepharsemInMyList = myList.$elements.mepharsemim.get().indexOf($mepharsem.get(0)) > -1;
		var allMepharsemSubjects = $("[data-mepharsem-id='" + mepharsemId + "']").get()
		var mepharsemSubjectsInMyList = allMepharsemSubjects.filter(function(subject) {
			return $.inArray(subject, myList.$elements.subjects) > -1
		}).length;

		//select subject
		if ($clicked.prop("checked")) {
			if (!isMepharsemInMyList) {
				$.merge(myList.$elements.mepharsemim, $mepharsem.get())				
			}

			$.merge(myList.$elements.subjects, $clicked.get())
			$.merge(myList.$elements.subjectOptions, mepharsemSubjectsOptions.get())
		}

		// Deselect subject
		else {
			var filteredMepharsemim;
			if (mepharsemSubjectsInMyList === 1) {
				filteredMepharsemim = $($.grep(myList.$elements.mepharsemim, function(mepharsem) {
					return $mepharsem.get(0) !== mepharsem 
				}))
			} else {
				filteredMepharsemim = myList.$elements.mepharsemim;
			}

			var filteredSubjects = $($.grep(myList.$elements.subjects, function(subject){
				return $clicked.get(0) !== subject;
			}))

			var filteredSubjectOptions = $($.grep(myList.$elements.subjectOptions, function(subjectOption){
				return $.inArray(subjectOption, mepharsemSubjectsOptions) === -1
			}))	

			myList.$elements.mepharsemim = filteredMepharsemim;
			myList.$elements.subjects = filteredSubjects;
			myList.$elements.subjectOptions = filteredSubjectOptions;
		}

		// Call for UI update
		updateCheckBoxes()
	}

	function toggleSubjectOption() {
		// take the clicked element
		var $clicked = $(this);
		var $subject = $clicked.parents(".subject-wrapper").find(".subject");
		var mepharsemId = $subject.data("mepharsem-id");
		var $mepharsem = $("#" + mepharsemId);
		var isMepharsemInMyList = myList.$elements.mepharsemim.get().indexOf($mepharsem.get(0)) > -1;
		var isSubjectInMyList = myList.$elements.subjects.get().indexOf($subject.get(0)) > -1;
		var allMepharsemSubjectsOptions = $("[data-mepharsem-id='" + mepharsemId + "']").parents(".subject-wrapper").find(".subject-option")
		var mepharsemSubjectOptionsInMyList = $($.grep(allMepharsemSubjectsOptions, function(subjectOption){
			return $.inArray(subjectOption, myList.$elements.subjectOptions) > -1
		})).length;

		//select subject option
		if ($clicked.prop("checked")) {
			if (!mepharsemSubjectOptionsInMyList) {
				$.merge(myList.$elements.mepharsemim, $mepharsem.get())
				$.merge(myList.$elements.subjects, $subject.get())				
			}
			$.merge(myList.$elements.subjectOptions, $clicked.get())

			if (myList.$elements.subjectOptions.length === $elements.subjectOptions.length) {
				Object.keys(myList.$elements).forEach(function(elementKey) {
					myList.$elements[elementKey] = $elements[elementKey];
				})
			}
		}

		// Deselect subject option
		else {
			var filteredMepharsemim;
			if (mepharsemSubjectOptionsInMyList === 1) {
				filteredMepharsemim = $($.grep(myList.$elements.mepharsemim, function(mepharsem) {
					return $mepharsem.get(0) !== mepharsem 
				}))
			} else {
				filteredMepharsemim = myList.$elements.mepharsemim;
			}

			var filteredSubjects;
			if (mepharsemSubjectOptionsInMyList === 1) {
				filteredSubjects = $($.grep(myList.$elements.subjects, function(subject){
					return $subject.get(0) !== subject;
				}))
			} else {
				filteredSubjects = myList.$elements.subjects;
			}

			var filteredSubjectOptions = $($.grep(myList.$elements.subjectOptions, function(subjectOption){
				return $clicked.get(0) !== subjectOption;
			}))	

			myList.$elements.mepharsemim = filteredMepharsemim;
			myList.$elements.subjects = filteredSubjects;
			myList.$elements.subjectOptions = filteredSubjectOptions;
		}

		// Call for UI update
		updateCheckBoxes()
	}

	function toggleSubjectOptions() {
		if (event.target.classList.contains("subject-item")) {
			$(this).find(".subject-options").toggleClass('d-flex');
		}
	}
});

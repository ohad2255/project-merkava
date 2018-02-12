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
		subjectWrapper: $(".subject-wrapper"),
		myList: $(".my-list"),
		myListSubjectsList: $(".my-list-subjects-list"),
		myListMepharsemimList: $(".my-list-mepharsemim-list"),
		myListToggle: $("#countCheckboxesWrapperMobile"),
		myListToggleLg: $(".list-drop-wrapper-lg"),
		myListLg: $(".my-list-wrapper-lg"),
		closeListButtonWrapper: $(".close-list-button-wrapper"),
		closeListButton: $(".close-list-button"),
		openSubjectsInList: $(".my-list-subjects-wrapper"),
		subjectsInList: $(".my-list-subjects-list"),
		openMepharsemimInList: $(".my-list-mepharsemim-wrapper"),
		mepharsemimInList: $(".my-list-mepharsemim-list"),
		mainBodyWapper: $(".main-checkboxes-wrapper"),
		openCloseArrowSubjects: $("#subjectsArrow"),
		openCloseArrowMepharsemim: $("#mepharsemimArrow"),
		optionsArrow: $(".blue-arrow"),
		$subjectsForm: $("#subjectsForm")
		//saveListButton: $(".save-list-button")
	}

	// All the data for the UI
	var myList = {
		selectedSubjectOptions: 0,
		$elements: {
			mepharsemim: $(),
			subjects: $(),
			subjectOptions: $()
		}
	};
	var lists = {
		openSubjectIndex: -1
	};

	// User actions
	$elements.toggleAllMepharsemim.click(toggleAllMepharsemim)
	$elements.toggleAllSubjectsOptions.click(toggleAllMepharsemim)
	$elements.mepharsemim.click(toggleMepharsem)
	$elements.subjects.click(toggleSubject)
	$elements.subjectOptions.click(toggleSubjectOption)
	$elements.subjectWrapper.click(toggleSubjectOptions)
	$elements.myList.delegate(".my-list-item", "click", removeFromMyList)
	$elements.myListToggle.click(toggleMyList)
	$elements.myListToggleLg.click(toggleMyListLg)
	$elements.myListToggle.click(closeMyList)
	$elements.closeListButton.click(closeMyListWithButton)
	$elements.openSubjectsInList.click(openCloseSubjectsInList)
	$elements.openMepharsemimInList.click(openCloseMepharsemimInList)

	// Update the UI
	function updateUI() {
		updateCheckBoxes()
		updateMyList()
		checkItemsForSubmitButton()
		handleSubjectsDisplay()
	}

	function handleSubjectsDisplay() {
		var $openSubject;
		if (lists.openSubjectIndex > -1) {

            // Close all subjects
            $elements.subjectWrapper.addClass("disabled").removeClass("active");
            $elements.subjectWrapper.find(".subject-options").removeClass("d-flex");
            $elements.subjectWrapper.find(".blue-arrow").removeClass("rotate");

            // Open current subject
            $openSubject = $elements.subjectWrapper.eq(lists.openSubjectIndex);
            $openSubject.removeClass("disabled").addClass("active");
            $openSubject.find(".subject-options").addClass("d-flex");
            $openSubject.find(".blue-arrow").addClass("rotate");

		} else {

			// Restore all subjects to default
			$elements.subjectWrapper.removeClass("disabled active");
			$elements.subjectWrapper.find(".subject-options").removeClass("d-flex");
            $elements.subjectWrapper.find(".blue-arrow").removeClass("rotate");
		}
	}

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

	function removeFromMyList() {
		var $clicked = $(this);
		var type = $clicked.data("type");
		var relatedCheckboxId = $clicked.data("related-checkbox-id");
		var $relatedCheckbox = $("#" + relatedCheckboxId);
		var isChecked = $relatedCheckbox.prop("checked");

		if (isChecked) {
			$relatedCheckbox.prop("checked", false);
			if (type === "subject") {
				toggleSubject($relatedCheckbox)
			} else if (type === "option") {
				toggleSubjectOption($relatedCheckbox)
			} else if (type === "mepharsem") {
				toggleMepharsem($relatedCheckbox)
			}
		}
	}

	function updateMyList() {
		var $subjects = $();
		var $mepharsemim = $();

		myList.$elements.subjects.each(function(index, subject) {
			var $subject = $(subject);
			var subjectId = $subject.prop("id");
			var subjectName = $subject.next().text()
			var $subjectOptions = $subject.parents(".subject-wrapper").find(".subject-option")

			var $options = $();
			$subjectOptions.each(function(index, subjectOption) {
				var $subjectOption = $(subjectOption);

				if ($subjectOption.prop("checked")) {
					var subjectOptionId = $subjectOption.prop("id");
					var subjectOptionName = $subjectOption.next().text()
					var subjectOptionTemplate = `
					  <div class="my-list-option-wrapper d-flex align-items-center">
						  <div 
						    class="my-list-item my-list-option-delete" 
						    data-related-checkbox-id="${subjectOptionId}"
						    data-type="option"
						  ><img src="../common/img/x.svg" class="delete-img" alt="delete-x"></div>
						  <div class="my-list-option-name">${subjectOptionName}</div>
					  </div>
					`

					$.merge($options, $(subjectOptionTemplate))
				}
			})

			var subjectTemplate = `
				<div class="my-list-subjects-list-subject">
		            <div class="my-list-subject-wrapper d-flex align-items-center">  
		              <div 
		                class="my-list-item my-list-subject-delete" 
		                data-related-checkbox-id="${subjectId}"
		                data-type="subject"
		              ><img src="../common/img/x.svg" class="delete-img" alt="delete-x"></div>
		              <div class="my-list-subject-name">${subjectName}</div>
		            </div>

		            <div class="my-list-options-wrapper">
		            	
		            	<!-- DYNAMIC CONTENT -->

		            </div>

		        </div>
			`

			var $subjectTemplate = $(subjectTemplate)
			$subjectTemplate.find(".my-list-options-wrapper").append($options)
			$.merge($subjects, $subjectTemplate)
		})

		myList.$elements.mepharsemim.each(function(index, mepharsem) {
			var $mepharsem = $(mepharsem);
			var mepharsemId = $mepharsem.prop("id");
			var mepharsemName = $mepharsem.next().text()
			var mepharsemTemplate = `
				<div class="my-list-mepharsemim-list-mepharsem">
		            <div class="my-list-mepharsem-wrapper d-flex align-items-center">  
		              <div 
		                class="my-list-item my-list-mepharsem-delete" 
		                data-related-checkbox-id="${mepharsemId}"
		                data-type="mepharsem"
		              >
		              	<img src="../common/img/x.svg" class="delete-img" alt="delete-x">
		              </div>
		              <div class="my-list-mepharsem-name">${mepharsemName}</div>
		            </div>
		        </div>
			`
			$.merge($mepharsemim, $(mepharsemTemplate))
		})

		if (myList.$elements.subjects.length === 0) {
			$elements.myListSubjectsList.html("")			
		} else {
			$elements.myListSubjectsList.html($subjects)
		}

		if (myList.$elements.mepharsemim.length === 0) {
			$elements.myListMepharsemimList.html("")			
		} else {
			$elements.myListMepharsemimList.html($mepharsemim)
		}
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
		updateUI()
	}

	function toggleMepharsem($clicked) {
		// take the clicked element
		var myListDelete = $clicked.length > 0;
		var $clicked = myListDelete ? $clicked : $(this);
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

			var filteredSubject = $($.grep(myList.$elements.subjects, function(subject) {
				return mepharsemSubjects.get().indexOf(subject) === -1;
			}))

			var filteredSubjectOption = $($.grep(myList.$elements.subjectOptions, function(subjectOption) {
				return mepharsemSubjectsOptions.get().indexOf(subjectOption) === -1;
			}))

			myList.$elements.mepharsemim = filteredMepharsemim;
			myList.$elements.subjects = filteredSubject;
			myList.$elements.subjectOptions = filteredSubjectOption;
		}

		// Call for UI update
		updateUI()
	}

	function toggleSubject($clicked) {
		// take the clicked element
		var myListDelete = $clicked.length > 0;
		var $clicked = myListDelete ? $clicked : $(this);
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

			var filteredSubjects = $($.grep(myList.$elements.subjects, function(subject) {
				return $clicked.get(0) !== subject;
			}))

			var filteredSubjectOptions = $($.grep(myList.$elements.subjectOptions, function(subjectOption) {
				return $.inArray(subjectOption, mepharsemSubjectsOptions) === -1
			}))

			myList.$elements.mepharsemim = filteredMepharsemim;
			myList.$elements.subjects = filteredSubjects;
			myList.$elements.subjectOptions = filteredSubjectOptions;
		}

		// Call for UI update
		updateUI()
	}

	function toggleSubjectOption($clicked) {
		// take the clicked element
		var myListDelete = $clicked.length > 0;
		var $clicked = myListDelete ? $clicked : $(this);
		var $subject = $clicked.parents(".subject-wrapper").find(".subject");
		var mepharsemId = $subject.data("mepharsem-id");
		var $mepharsem = $("#" + mepharsemId);
		var isMepharsemInMyList = myList.$elements.mepharsemim.get().indexOf($mepharsem.get(0)) > -1;
		var isSubjectInMyList = myList.$elements.subjects.get().indexOf($subject.get(0)) > -1;
		var allMepharsemSubjectsOptions = $("[data-mepharsem-id='" + mepharsemId + "']").parents(".subject-wrapper").find(".subject-option")
		var allSubjectsOptions = $subject.parents(".subject-wrapper").find(".subject-option")
		var mepharsemSubjectOptionsInMyList = $($.grep(allMepharsemSubjectsOptions, function(subjectOption) {
			return $.inArray(subjectOption, myList.$elements.subjectOptions) > -1
		})).length;
		var subjectOptionsInMyList = $($.grep(allSubjectsOptions, function(subjectOption) {
			return $.inArray(subjectOption, myList.$elements.subjectOptions) > -1
		})).length;

		//select subject option
		if ($clicked.prop("checked")) {
			if (!mepharsemSubjectOptionsInMyList) {
				$.merge(myList.$elements.mepharsemim, $mepharsem.get())
			}

			if (!subjectOptionsInMyList) {
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
			if (subjectOptionsInMyList === 1) {
				filteredSubjects = $($.grep(myList.$elements.subjects, function(subject) {
					return $subject.get(0) !== subject;
				}))
			} else {
				filteredSubjects = myList.$elements.subjects;
			}

			var filteredSubjectOptions = $($.grep(myList.$elements.subjectOptions, function(subjectOption) {
				return $clicked.get(0) !== subjectOption;
			}))

			myList.$elements.mepharsemim = filteredMepharsemim;
			myList.$elements.subjects = filteredSubjects;
			myList.$elements.subjectOptions = filteredSubjectOptions;
		}

		// Call for UI update
		updateUI()
	}

	function toggleSubjectOptions() {
		if (event.target.classList.contains("subject-item")) {
			var $subjectWrapper = $(this);
			var shouldClose = $subjectWrapper.hasClass("active");
			lists.openSubjectIndex = shouldClose ? -1 : $subjectWrapper.index();
            updateUI();
		}
	}

	// function toggleMyList() {
	// 	$elements.myListToggle.addclass(".d-block");
	// }

	function toggleMyList() {

		$(".my-list").toggleClass("d-block");
		$elements.closeListButtonWrapper.addClass("d-none");
		$elements.mainBodyWapper.toggleClass("d-none");

		// if (myList.selectedSubjectOptions.length>0) {
		// 	$(".my-list").toggleClass("d-block");
		// 	$elements.closeListButtonWrapper.addClass("d-none");
		// 	$elements.mainBodyWapper.toggleClass("d-none");
		// } 
	}

	function toggleMyListLg() {
		$elements.myListLg.toggleClass("d-block");
	}

	function closeMyList() {
		$elements.closeListButtonWrapper.toggleClass("d-block");
		$(".list-drop-arrows").toggleClass("rotate-list-arrows");
	}

	function closeMyListWithButton() {
		$elements.myList.removeClass("d-block");
		$elements.myList.addClass("d-none");
		$elements.closeListButtonWrapper.removeClass("d-block");
		$elements.closeListButtonWrapper.addClass("d-none");
		$elements.mainBodyWapper.toggleClass("d-none");

	}

	function openCloseSubjectsInList() {
		// if (myList.$elements.subjectOptions.length>0) {
			$elements.subjectsInList.toggleClass("d-block");
			$elements.openCloseArrowSubjects.toggleClass("rotate");
			$elements.openSubjectsInList.toggleClass("change-background-color");
		// }
	}

	function openCloseMepharsemimInList() {
		//if (myList.$elements.subjectOptions.length>0) {
			$elements.mepharsemimInList.toggleClass("d-block");
			$elements.openCloseArrowMepharsemim.toggleClass("rotate");
			$elements.openMepharsemimInList.toggleClass("change-background-color");
		//}
	}

	function checkItemsForSubmitButton() {
		if (myList.$elements.subjectOptions.length>0) {
			$(".save-list-button").removeClass("disabled");
		} else {
			$(".save-list-button").addClass("disabled");
		}
	}
	

	// $(".down").click(function() {
	// 	$("html").scroll()
	// });

	// $(function() {
	//     $('.down').click (function() {
	//       $('body').animate({ scrollTop: $('body').height() }, 800);
	//     });
 //  });
});



// <!-- list-subject -->

// <div class="my-list-subjects-list-subject">

// <div class="my-list-subject-wrapper">  
//   <div 
//     class="my-list-item my-list-subject-delete" 
//     data-related-checkbox-id="subject1"
//     data-type="subject"
//   >delete</div>
//   <div class="my-list-subject-name">subject</div>
// </div>

// <!-- list-subject-option -->

// </div>
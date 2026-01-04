function ajaxCreateTicket(formName, url) {

	const form = document.forms[formName];

	// Native form validation
	if (!form.checkValidity()) {
		form.reportValidity();
		return;
	}

	var action = form.elements['ROSP_WEB_ACTION'].value;

	var actionSub = form.elements['ROSP_WEB_ACTION_SUB'].value;

	var actionSubActions = form.elements['ROSP_WEB_ACTION_SUB_actions'].value;

	var emailFrom = form.elements['email_from'].value;

	var emailTo = form.elements['email_to'].value;

	var emailSubjectPrefix = form.elements['email_subject_prefix'].value;

	var emailSubject = form.elements['email_subject'].value;

	var emailBodyPart1 = form.elements['email_body_part1'].value;

	var emailBodyPart3 = form.elements['email_body_part3'].value;

	var name = form.elements['user_userDetail_address_name'].value;

	var phone = form.elements['user_userDetail_address_phoneNumber_ten_without_isd'].value;

	var email = form.elements['user_userDetail_address_emailId'].value;

	var message = form.elements['ticketmessage_remark'].value;
	message = encodeURIComponent(message);

	url = url + '&ROSP_WEB_ACTION=' + action + '&ROSP_WEB_ACTION_SUB=' + actionSub + '&ROSP_WEB_ACTION_SUB_actions=' + actionSubActions + '&email_from=' + emailFrom + '&email_to=' + emailTo + '&email_subject_prefix=' + emailSubjectPrefix + '&email_subject=' + emailSubject + '&email_body_part1=' + emailBodyPart1 + '&email_body_part3=' + emailBodyPart3 + '&user_userDetail_address_name=' + name + '&user_userDetail_address_phoneNumber_ten_without_isd=' + phone + '&user_userDetail_address_emailId=' + email + '&ticketmessage_remark=' + message;

	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", url, true);
	xhttp.send();
	alert('Message has been sent');
}
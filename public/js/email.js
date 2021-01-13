export function sendEmail() {
	const sgMail = require('@sendgrid/mail');

	sgMail.setApiKey(
		'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'
	);

	const msg = {
		to: 'akash.shyam2008@gmail.com', // Change to your recipient
		from: 'akash.shyam2008@gmail.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html:
			'<strong>and easy to do anywhere, even with Node.js</strong>',
	};

	sgMail
		.send(msg)
		.then(() => alert('Done'))
		.catch((err) => {
			alert(err.message);
			console.log(err);
		});
}

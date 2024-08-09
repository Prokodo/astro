import { createSignal } from 'solid-js';

function LoginForm() {
	// State signals for the form fields
	const [username, setUsername] = createSignal('');
	const [password, setPassword] = createSignal('');
	const [errorMessage, setErrorMessage] = createSignal('');

	// Form submission handler
	const handleSubmit = (event) => {
		event.preventDefault();

		// Simple validation (just as an example)
		if (username() === '' || password() === '') {
			setErrorMessage('Both fields are required.');
			return;
		}

		// Handle login logic here (e.g., send credentials to API)
		console.log('Username:', username());
		console.log('Password:', password());

		// Reset the form (optional)
		setUsername('');
		setPassword('');
		setErrorMessage('');
	};

	return (
		<form id="login-form" onSubmit={handleSubmit}>
			<div>
				<label for="username">Username:</label>
				<input
					id="username"
					type="text"
					value={username()}
					onInput={(e) => setUsername(e.target.value)}
					placeholder="Enter your username"
				/>
			</div>

			<div>
				<label for="password">Password:</label>
				<input
					id="password"
					type="password"
					value={password()}
					onInput={(e) => setPassword(e.target.value)}
					placeholder="Enter your password"
				/>
			</div>

			{errorMessage() && <p id="error-message" style={{ color: 'red' }}>{errorMessage()}</p>}
			<button type="submit">Login</button>
		</form>
	);
}

export default LoginForm;

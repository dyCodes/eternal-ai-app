import React, { useState } from 'react';
import Container from '@/components/UI/Container';
import { useRouter } from 'next/router';
import TextAreaBox from '@/components/UI/TextAreaBox';
import InputBox from '@/components/UI/InputBox';
import Button from '@/components/UI/Button/Button';

export default function Home() {
	const router = useRouter();
	const [formData, setFormData] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);

		// Redirect to report page
		router.push('/report');
	};

	return (
		<Container className=''>
			<form onSubmit={handleSubmit}>
				{/* FORM START */}

				<div className='category'>
					<h6>symptoms</h6>
					<div className='formSection'>
						<TextAreaBox
							name='nature'
							label='Nature of symptoms'
							placeholder='Details about itchiness, pain, burning, tingling, etc.'
							rows='10'
							value={formData.nature}
							onChange={(event) => handleChange(event)}
						/>

						<div>
							<InputBox
								name='appearance'
								label='Appearance'
								placeholder='Color changes, swelling, scaling, oozing, or any other visible markers.'
								value={formData.appearance}
								onChange={(event) => handleChange(event)}
							/>
							<InputBox
								name='duration'
								label='Duration'
								placeholder='How long the symptoms have been present. '
								value={formData.duration}
								onChange={(event) => handleChange(event)}
							/>
							<InputBox
								name='changes'
								label='Changes over time'
								placeholder='Whether symptoms are getting worse, improving, or changing in nature. '
								value={formData.changes}
								onChange={(event) => handleChange(event)}
							/>
						</div>
					</div>
				</div>

				<div className='category'>
					<h6>Personal Information</h6>

					<div className='formSection'>
						<InputBox
							name='age'
							label='Age'
							placeholder='Certain skin conditions are more common in specific age groups.'
							value={formData.age}
							onChange={(event) => handleChange(event)}
						/>

						<InputBox
							name='gender'
							label='Gender'
							placeholder='Some skin issues are influenced by gender due to hormonal differences.'
							value={formData.gender}
							onChange={(event) => handleChange(event)}
						/>

						<TextAreaBox
							name='allergies'
							label='Allergies'
							placeholder='Known allergies, particularly to medications, food, or environmental factors.'
							value={formData.allergies}
							rows={6}
							onChange={(event) => handleChange(event)}
						/>
						<TextAreaBox
							name='medications'
							label='Medications'
							placeholder='Known medication, particularly to medications, food, or environmental factors.'
							value={formData.medications}
							rows={6}
							onChange={(event) => handleChange(event)}
						/>
					</div>
				</div>

				<div className='category'>
					<h6>Lifestyle </h6>
					<div className='formSection'>
						<InputBox
							name='sun_exposure'
							label='Sun exposure'
							placeholder='Amount of daily or frequent Sun exposure.'
							value={formData.sun_exposure}
							onChange={(event) => handleChange(event)}
						/>
						<TextAreaBox
							name='dietary_habit'
							label='Dietary habits'
							placeholder='General diet, known allergies, recent changes in diet.'
							value={formData.dietary_habit}
							rows={6}
							onChange={(event) => handleChange(event)}
						/>
					</div>
				</div>

				<div className='category !mb-3'>
					<h6>Area of localization</h6>
					<div className='formSection'>
						<InputBox
							name='location'
							label='Location'
							placeholder='Specific body parts affected by the condition..'
							value={formData.location}
							onChange={(event) => handleChange(event)}
						/>

						<InputBox
							name='intensity'
							label='Intensity'
							placeholder='Rate the level of pain or discomfort on a numerical scale.'
							value={formData.intensity}
							onChange={(event) => handleChange(event)}
						/>

						<TextAreaBox
							name='spread'
							label='Spread'
							placeholder='Whether the condition is localized or spreading, and how rapidly.'
							value={formData.spread}
							rows={6}
							onChange={(event) => handleChange(event)}
						/>

						<InputBox
							name='trigger'
							label='Trigger'
							placeholder='Any known triggers that exacerbate the condition, such as stress, certain activities, or exposure to specific substances.'
							value={formData.trigger}
							onChange={(event) => handleChange(event)}
						/>
					</div>
				</div>

				{/* FORM END */}
				<div className='mb-14'>
					<Button className='bg-primary text-black !px-20' type='submit'>
						Submit
					</Button>
				</div>
			</form>
		</Container>
	);
}

import { useState, useEffect } from 'react';
import { TextAreaBox, Container, InputBox, Button } from '@/components';
import { useRouter } from 'next/router';
import httpClient from '@/api/axios';
import { toast } from 'react-toastify';
import ImageUploadBox from '@/components/ui/ImageUploadBox';
import { useAuthContext } from '@/context/AuthContext';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [imagesPreview, setImagesPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    // Set form data from local storage
    if (user && userData) {
      setFormData(JSON.parse(userData));
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prev) => ({ ...prev, imageFile: file, mimeType: file.type }));

    setImagesPreview([]);
    // Convert the image to base64
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagesPreview((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Save form data to local storage
    const userData = {
      ...formData,
      imageFile: null,
      mimeType: null,
      date: new Date().toDateString(),
      name: user?.name,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    try {
      const newFormData = new FormData();
      newFormData.append('image', formData.imageFile);
      for (const key in formData) {
        if (['imageFile'].includes(key)) continue;
        newFormData.append(key, formData[key]);
      }

      const response = await httpClient.post('/report', newFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const { data, status } = response;

      if (status === 200) {
        const reportData = JSON.parse(data);
        localStorage.setItem('reportData', JSON.stringify(reportData));
        localStorage.setItem(
          'reportImages',
          JSON.stringify([imagesPreview[0]])
        );
        // Redirect to report page
        router.push('/report');
      }
    } catch (error) {
      console.log('Error: ', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className=''>
      <form onSubmit={handleSubmit}>
        {/* FORM START */}
        <div className='category'>
          <h6>Image Upload</h6>

          <ImageUploadBox
            imageFile={formData.imageFile}
            imagesPreview={imagesPreview}
            onChange={(event) => handleImageChange(event)}
          />
        </div>

        <div className='category'>
          <h6>symptoms</h6>

          <div className='formSection'>
            <TextAreaBox
              name='nature'
              label='Nature of symptoms'
              placeholder='Description of the symptoms, including pain, itching, burning, or any other sensations.'
              rows='10'
              value={formData.nature}
              onChange={(event) => handleInputChange(event)}
              required
            />

            <div>
              <InputBox
                name='appearance'
                label='Appearance'
                placeholder='Color changes, swelling, scaling, oozing, or any other visible markers.'
                value={formData.appearance}
                onChange={(event) => handleInputChange(event)}
                required
              />
              <InputBox
                name='duration'
                label='Duration'
                placeholder='How long the symptoms have been present. '
                value={formData.duration}
                onChange={(event) => handleInputChange(event)}
                required
              />
              <InputBox
                name='changes'
                label='Changes over time'
                placeholder='Whether symptoms are getting worse, improving, or changing in nature. '
                value={formData.changes}
                onChange={(event) => handleInputChange(event)}
                required
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
              onChange={(event) => handleInputChange(event)}
              required
            />

            <InputBox
              name='gender'
              label='Gender'
              placeholder='Some skin issues are influenced by gender due to hormonal differences.'
              value={formData.gender}
              onChange={(event) => handleInputChange(event)}
              required
            />

            <TextAreaBox
              name='allergies'
              label='Allergies'
              placeholder='Known allergies, particularly to medications, foods, or environmental factors.'
              value={formData.allergies}
              rows={6}
              onChange={(event) => handleInputChange(event)}
            />

            <TextAreaBox
              name='medications'
              label='Medications'
              placeholder='Known medications, including prescription, over-the-counter, or herbal supplements.'
              value={formData.medications}
              rows={6}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>

        <div className='category'>
          <h6>Lifestyle </h6>

          <div className='formSection'>
            <InputBox
              name='sun_exposure'
              label='Sun exposure'
              placeholder='Rate the level of sun exposure on a scale of 1-10.'
              value={formData.sun_exposure}
              onChange={(event) => handleInputChange(event)}
            />

            <InputBox
              label='Occupational hazards'
              name='occupational_hazards'
              placeholder='Any known occupational hazards, such as exposure to chemicals, extreme temperatures, or physical strain.'
              value={formData.occupational_hazards}
              onChange={(event) => handleInputChange(event)}
            />

            <TextAreaBox
              name='dietary_habit'
              label='Dietary habits'
              placeholder='General dietary habits, including any known food intolerances or restrictions.'
              value={formData.dietary_habit}
              rows={6}
              onChange={(event) => handleInputChange(event)}
            />

            <InputBox
              label='Recent Travels'
              name='recent_travels'
              placeholder='Recent travels or exposure to new environments.'
              value={formData.recent_travels}
              onChange={(event) => handleInputChange(event)}
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
              onChange={(event) => handleInputChange(event)}
              required
            />

            <InputBox
              name='intensity'
              label='Intensity'
              placeholder='Rate the intensity of the symptoms on a scale of 1-10.'
              value={formData.intensity}
              onChange={(event) => handleInputChange(event)}
            />

            <InputBox
              name='spread'
              label='Spread'
              placeholder='Rate the spread of the symptoms on a scale of 1-10.'
              value={formData.spread}
              onChange={(event) => handleInputChange(event)}
            />

            <InputBox
              name='trigger'
              label='Trigger'
              placeholder='Any known triggers that exacerbate the condition, such as stress, certain activities, or exposure to specific substances.'
              value={formData.trigger}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>

        {/* FORM END */}
        <div className='mb-14'>
          <Button
            className='bg-primary text-black !px-20'
            type='submit'
            loading={loading}
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}

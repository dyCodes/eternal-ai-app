import { useState, useEffect } from 'react';
import { TextAreaBox, Container, InputBox, Button } from '@/components';
import { useRouter } from 'next/router';
import httpClient from '@/api/axios';
import { toast } from 'react-toastify';
import ImageUploadBox from '@/components/ui/ImageUploadBox';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    // Set form data from local storage
    if (userData) {
      setFormData(JSON.parse(userData));
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prev) => ({
      ...prev,
      imageFile: file,
      mimeType: file.type,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Save form data to local storage
    const userData = {
      ...formData,
      imagePreview: null,
      imageFile: null,
      mimeType: null,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    try {
      const newFormData = new FormData();
      newFormData.append('image', formData.imageFile);
      const Exceptions = ['imagePreview', 'imageFile'];
      for (const key in formData) {
        if (Exceptions.includes(key)) continue;
        newFormData.append(key, formData[key]);
      }

      const response = await httpClient.post('/report', newFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const { data, status } = response;

      if (status === 200) {
        const reportData = JSON.parse(data);
        localStorage.setItem('reportData', JSON.stringify(reportData));
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
            imagePreview={formData.imagePreview}
            onChange={(event) => handleImageChange(event)}
          />
        </div>

        <div className='category'>
          <h6>symptoms</h6>
          <div className='formSection'>
            <TextAreaBox
              name='nature'
              label='Nature of symptoms'
              placeholder='Details about itchiness, pain, burning, tingling, etc.'
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
              placeholder='Known allergies, particularly to medications, food, or environmental factors.'
              value={formData.allergies}
              rows={6}
              onChange={(event) => handleInputChange(event)}
            />

            <TextAreaBox
              name='medications'
              label='Medications'
              placeholder='Known medication, particularly to medications, food, or environmental factors.'
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
              placeholder='Amount of daily or frequent Sun exposure.'
              value={formData.sun_exposure}
              onChange={(event) => handleInputChange(event)}
            />
            <TextAreaBox
              name='dietary_habit'
              label='Dietary habits'
              placeholder='General diet, known allergies, recent changes in diet.'
              value={formData.dietary_habit}
              rows={6}
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
            />

            <InputBox
              name='intensity'
              label='Intensity'
              placeholder='Rate the level of pain or discomfort on a numerical scale.'
              value={formData.intensity}
              onChange={(event) => handleInputChange(event)}
            />

            <TextAreaBox
              name='spread'
              label='Spread'
              placeholder='Whether the condition is localized or spreading, and how rapidly.'
              value={formData.spread}
              rows={6}
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

import { toast } from 'react-toastify';
import { UploadContainer } from './styles';

/**
 * A component for uploading a report document.
 *
 * @param {string} modalType - The type of modal this component is used in.
 * @param {string} helpText - The help text to display when no file is selected.
 * @param {function} onChange - A callback function to handle file selection.
 * @param {File} documentFile - The currently selected document file.
 * @returns {JSX.Element} - The JSX element for the ReportUploadBox component.
 */
function ReportUploadBox({ modalType, helpText, onChange, documentFile }) {
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Allowed MIME types for PDF and Word documents
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    // Check file type
    if (!allowedMimeTypes.includes(file.type)) {
      return toast.error(
        'Invalid file type. Only PDF and Microsoft Word documents are allowed.'
      );
    }

    // Check file size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return toast.error('File size should not exceed 5MB.');
    }

    onChange(file);
  };
  return (
    <UploadContainer
      $modalType={modalType}
      className='flex items-center justify-center w-full'
    >
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center justify-center w-full min-h-60 border border-secondary-940 border-dashed rounded-lg cursor-pointer bg-white'
      >
        {documentFile ? (
          <div className='flex flex-col items-center justify-center pt-4 pb-5'>
            <p className='mb-2 text-sm text-gray-500'>
              Selected file: {documentFile}
            </p>
            <p className='text-xs text-gray-500'>Ready to upload</p>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center pt-4 pb-5'>
            <svg
              className='w-8 h-8 mb-4 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500 text-center'>
              <span className='font-semibold'>{helpText}</span> or drag and drop
            </p>
            <p className='text-xs text-gray-500'>
              PDF or Microsoft Word (MAX: 5MB)
            </p>
          </div>
        )}

        <input
          id='dropzone-file'
          type='file'
          className='hidden'
          accept='.pdf,.doc,.docx'
          onChange={handleChange}
        />
      </label>
    </UploadContainer>
  );
}

export default ReportUploadBox;

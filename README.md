# Automated Online System to Verify Duplicate Press Titles

An intelligent web application that verifies the uniqueness of press titles using advanced text similarity algorithms and ensures regulatory compliance. The system employs multiple similarity checking algorithms including Soundex, Levenshtein Distance, and TF-IDF with Cosine Similarity to prevent duplicate titles and maintain regulatory standards.

## Features

- **Advanced Similarity Checking**
  - Phonetic similarity using Soundex algorithm
  - String similarity using Levenshtein Distance
  - Semantic similarity using TF-IDF and Cosine Similarity
  - Combined verification probability score

- **Regulatory Compliance**
  - Validation against disallowed words
  - Prefix and suffix checking
  - Automated compliance with regulatory rules
  - Combination validation with existing titles

- **User Interface**
  - Modern, responsive React-based UI
  - Real-time validation feedback
  - Detailed similarity scores
  - User-friendly error messages

## Technical Stack

- React.js
- Django & Django REST Framework
### AI/ML Libraries
- **jellyfish**: Phonetic similarity algorithms
- **fuzzywuzzy**: String matching capabilities
- **scikit-learn**: TF-IDF and cosine similarity
- **pandas**: Dataset handling
- **numpy**: Numerical computations

## Prerequisites

- Python 3.8 or higher
- Node.js 14.x or higher
- Git

## Installation

### Backend Setup

1. Clone the repository
```bash
git clone https://github.com/SharveshGuru/Automated-Online-System-to-Verify-Duplicate-Press-Titles.git
cd Automated-Online-System-to-Verify-Duplicate-Press-Titles
```

2. Set up Python virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. Install dependencies
```bash
cd backend
pip install -r requirements.txt
```

4. Database setup
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Load initial data
```bash
python manage.py load_titles
```

6. Run the development server
```bash
python manage.py runserver
```

### Frontend Setup

1. Install dependencies
```bash
cd frontend
npm install
```

2. Start the development server
```bash
npm start
```

## Configuration

### Backend Environment Variables
Create a `.env` file in the backend directory:
```env
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=mysql://user:password@localhost:3306/dbname
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

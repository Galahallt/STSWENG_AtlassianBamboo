const csvValidator = {
  validateCsvData: (rows) => {
    const dataRows = rows.slice(1, rows.length); //ignore header at 0 and get rest of the rows
    for (let i = 0; i < dataRows.length; i++) {
      const rowError = csvValidator.validateCsvRow(dataRows[i]);
      if (rowError) {
        return `${rowError} on row ${i + 1}`;
      }
    }
    return;
  },
  validateCsvRow: (row) => {
    const colleges = [
      'BAGCED',
      'CCS',
      'COL',
      'CLA',
      'COS',
      'GCOE',
      'RVR-COB',
      'SOE',
      'N/A',
    ];
    const departments = [
      'Information Technology',
      'Computer Technology',
      'Software Technology',
      'Counseling and Educational Psychology',
      'Educational Leadership and Management',
      'English and Applied Linguistics',
      'Physical Education',
      'Science Education',
      'Accountancy',
      'Commercial Law',
      'Decision Sciences and Innovation',
      'Management of Financial Institutions',
      'Management and Organization',
      'Marketing Management',
      'Behavioral Science',
      'Communication',
      'Filipino',
      'History',
      'International Studies',
      'Literature',
      'Philosophy',
      'Political Science',
      'Psychology',
      'Theology and Religious Education',
      'Biology',
      'Chemistry',
      'Physics',
      'Mathematics',
      'School of Economics',
      'Chemical Engineering',
      'Electronics and Communications Engineering',
      'Mechanical Engineering',
      'Industrial Engineering',
      'Manufacturing Engineering and Management',
      'College of Law',
      'N/A',
    ];
    // check if columns are null
    if (!row[0]) {
      return 'Invalid last name (required)';
    } else if (!row[1]) {
      return 'Invalid first name (required)';
    } else if (!row[2]) {
      return 'Invalid DLSU email (required)';
    } else if (!row[3]) {
      return 'Invalid college (required)';
    } else if (!row[4]) {
      return 'Invalid department (required)';
    } else if (!row[5]) {
      return 'Invalid courses (required)';
    } else if (!row[2].includes('@dlsu.edu.ph')) {
      return 'Invalid DLSU email (wrong domain)';
    } else if (!colleges.includes(row[3])) {
      return 'Invalid college (does not exist)';
    } else if (!departments.includes(row[4])) {
      return 'Invalid department (does not exist)';
    } else if (!/^[a-zA-Z ]*$/.test(row[0])) {
      return 'Invalid last name (should only contain alphabet characters)';
    } else if (!/^[a-zA-Z ]*$/.test(row[1])) {
      return 'Invalid first name (should only contain alphabet characters)';
    }
    return;
  },
};

export default csvValidator;

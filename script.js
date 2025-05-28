

// Database operations using localStorage
const Database = {
    // Initialize database with sample data
    init() {
        if (!localStorage.getItem('medicareDB')) {
            const initialData = {
                doctors: [
                    { id: 'DR001', name: 'Dr. John Smith', department: 'cardiology', password: 'cardio123' },
                    { id: 'DR002', name: 'Dr. Sarah Johnson', department: 'pediatrics', password: 'pedia123' },
                    { id: 'DR003', name: 'Dr. Michael Chen', department: 'orthopedics', password: 'ortho123' },
                    { id: 'DR004', name: 'Dr. Emily Davis', department: 'dermatology', password: 'derma123' },
                    { id: 'DR005', name: 'Dr. Robert Wilson', department: 'general', password: 'general123' },
                    { id: 'DR006', name: 'Dr. Lisa Martinez', department: 'gynecology', password: 'gyno123' },
                    { id: 'DR007', name: 'Dr. David Brown', department: 'emergency', password: 'emergency123' }
                ],
                patients: [],
                appointments: [],
                doctorLogins: [],
                patientLogins: []
            };
            localStorage.setItem('medicareDB', JSON.stringify(initialData));
        }
    },
    
    get() {
        return JSON.parse(localStorage.getItem('medicareDB'));
    },
    
    save(data) {
        localStorage.setItem('medicareDB', JSON.stringify(data));
    },
    
    addDoctorLogin(loginData) {
        const db = this.get();
        loginData.timestamp = new Date().toISOString();
        db.doctorLogins.push(loginData);
        this.save(db);
    },
    
    addPatientLogin(loginData) {
        const db = this.get();
        loginData.timestamp = new Date().toISOString();
        db.patientLogins.push(loginData);

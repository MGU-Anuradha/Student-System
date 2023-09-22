package ManagementSystem.StudentSystem.Service;

import ManagementSystem.StudentSystem.Model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudent();
}

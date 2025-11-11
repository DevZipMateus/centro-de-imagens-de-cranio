import DentistLogin from "./DentistLogin";
import PatientLogin from "./PatientLogin";

const LoginSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <DentistLogin />
            <PatientLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;

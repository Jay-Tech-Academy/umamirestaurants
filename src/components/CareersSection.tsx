import React, { useState } from 'react';
import { Briefcase, Sparkles, CheckCircle2, DollarSign, Clock, MapPin, Send, X, ArrowRight, Check } from 'lucide-react';
import { CAREERS_DATA, CAREER_PERKS, JobOpening } from '../data/restaurantData';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [filterDepartment, setFilterDepartment] = useState<string>('all');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    availability: 'Immediate',
    coverNote: '',
  });

  const departments = ['all', 'Kitchen & Culinary', 'Front of House', 'Bar & Hospitality', 'Operations'];

  const filteredJobs = filterDepartment === 'all'
    ? CAREERS_DATA
    : CAREERS_DATA.filter((j) => j.department === filterDepartment);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setTimeout(() => {
        setSelectedJob(null);
        setApplicationSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          availability: 'Immediate',
          coverNote: '',
        });
      }, 2500);
    }, 500);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#121212] text-neutral-100 relative overflow-hidden" id="careers-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Hospitality Family</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Careers at <span className="text-[#D4AF37]">Umami Telford</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Build your career with the UK's fastest-growing unlimited world dining brand. We offer competitive pay, certified culinary development, and a vibrant multicultural team.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="rounded-2xl glass border border-white/10 p-6 sm:p-8 mb-16 shadow-2xl">
          <h3 className="text-lg font-black uppercase tracking-wider text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Why You'll Love Working With Us</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAREER_PERKS.map((perk, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-neutral-900/70 border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-200 leading-relaxed">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">
              Current Vacancies ({filteredJobs.length})
            </h3>
            <p className="text-xs text-neutral-400">All positions based at Southwater Square, Telford (TF3 4HS)</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setFilterDepartment(dept)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  filterDepartment === dept
                    ? 'gold-gradient text-black font-bold'
                    : 'glass text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {dept === 'all' ? 'All Roles' : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl glass border border-white/10 hover:border-[#D4AF37]/50 transition-all p-6 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] block">
                      {job.department}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {job.title}
                    </h4>
                  </div>
                  {job.isHot && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#D4AF37] text-black">
                      Immediate Hire
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300 mb-4">
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <strong>{job.salary}</strong>
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{job.type}</span>
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{job.location}</span>
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Key Requirements:
                  </span>
                  {job.requirements.map((req, i) => (
                    <div key={i} className="text-xs text-neutral-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">Shift meals included</span>
                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="px-5 py-2 rounded-lg gold-gradient text-black font-bold uppercase tracking-wider text-xs gold-glow cursor-pointer active:scale-95 transition-transform flex items-center gap-1.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-[#121212] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden text-neutral-200 max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b border-white/10 bg-neutral-950 flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-white uppercase tracking-tight">
                  Apply for {selectedJob.title}
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium">{selectedJob.location} • {selectedJob.salary}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              {applicationSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Application Received!</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    Thank you, {formData.fullName}. Our Telford management team will review your credentials and contact you at {formData.phone || formData.email} within 48 hours for an interview.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Liam Taylor"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="liam@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07123 456789"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                        Relevant Hospitality Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Entry Level (No prior experience)">Entry Level (No prior experience)</option>
                        <option value="1 - 2 Years">1 - 2 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5+ Years Senior">5+ Years Senior</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                        Availability
                      </label>
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Immediate">Immediate Start</option>
                        <option value="1 Week Notice">1 Week Notice</option>
                        <option value="2 Weeks Notice">2 Weeks Notice</option>
                        <option value="Weekends Only">Weekends & Evenings Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                      Summary Note / Prior Roles
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Briefly tell us why you want to join Umami World Kitchen and any past restaurant roles..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg gold-gradient text-black font-black uppercase tracking-widest text-xs gold-glow cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5 text-black" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

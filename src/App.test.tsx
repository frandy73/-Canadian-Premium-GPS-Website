import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the navigation bar', () => {
    render(<App />);
    expect(screen.getAllByText('GPS').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the hero title', () => {
    render(<App />);
    expect(screen.getAllByText('Performance Management').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('in Healthcare')).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(<App />);
    expect(screen.getByText('ABOUT GPS')).toBeInTheDocument();
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });

  it('renders values in the about section', () => {
    render(<App />);
    expect(screen.getByText('Excellence')).toBeInTheDocument();
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Collaboration')).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(<App />);
    expect(screen.getByText('Healthcare Performance Solutions')).toBeInTheDocument();
    expect(screen.getAllByText('Team Engagement').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Leadership Development').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the "Why Choose Us" section', () => {
    render(<App />);
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument();
    expect(screen.getByText('Concrete Field Expertise')).toBeInTheDocument();
  });

  it('switches to French when language toggle is clicked', () => {
    render(<App />);
    const toggles = screen.getAllByText('FR');
    fireEvent.click(toggles[0]);
    expect(screen.getByText('Gestion de la performance')).toBeInTheDocument();
    expect(screen.getAllByText('À Propos').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the CTA section', () => {
    render(<App />);
    expect(screen.getByText('Ready to Transform Your Performance?')).toBeInTheDocument();
  });

  it('renders the footer with contact info', () => {
    render(<App />);
    expect(screen.getByText('info@gps-canada.com')).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  it('renders locations section', () => {
    render(<App />);
    expect(screen.getByText('Toronto')).toBeInTheDocument();
    expect(screen.getByText('Montréal')).toBeInTheDocument();
  });
});

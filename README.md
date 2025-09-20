# Multi-Year Revenue Recognition Web App

This web application is designed to properly allocate SSP (Selling Service Price) between performance obligations over a multi-year term when some amounts are allocated at delivery on day 1.

## Purpose

The application handles the complex revenue recognition scenarios where:
- Multiple performance obligations exist within a contract
- Some revenue is recognized immediately upon delivery (day 1)
- Remaining revenue must be allocated across multiple years
- Proper SSP allocation is required for compliance with accounting standards

## Features

- Multi-year contract management
- Performance obligation tracking
- SSP allocation calculations
- Day 1 delivery recognition
- Revenue scheduling across contract terms

## ASC 606 Compliance

This calculator implements ASC 606 Section 4 requirements for "Multi-Year Obligations":

### Revenue Recognition Methods
- **Output Method**: Measure progress based on direct measurements of value transferred (e.g., units delivered, milestones completed)
- **Input Method**: Measure progress based on entity's efforts or inputs (e.g., labor hours, costs incurred)

### Key Features
- ✅ Progress measurement for obligations satisfied over time
- ✅ Method selection that best reflects transfer of control
- ✅ Multi-jurisdictional revenue allocation support
- ✅ Professional calculation interface with validation

## Quick Start

1. **Open the calculator**: Open `index.html` in your web browser
2. **Enter contract details**: Total transaction price, contract term, day 1 delivery amount
3. **Select recognition method**: Choose Output or Input method based on your scenario
4. **Input progress data**: Enter units delivered or costs incurred per year
5. **Calculate**: View the revenue recognition schedule

## Example Scenarios

See `demo.md` for detailed examples including:
- Software license with feature delivery (Output Method)
- Construction contract with cost-based recognition (Input Method)

## Deployment

### ⚡ Quick Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ddecoen/multi_year_revrec)

### Manual Deployment

For detailed deployment instructions to Vercel, see [`DEPLOYMENT.md`](DEPLOYMENT.md)

**Three deployment methods available:**
1. **GitHub Integration** (recommended for updates)
2. **Vercel CLI** (developer-friendly)
3. **Drag & Drop** (simplest for one-time deployment)

### Local Development

```bash
# Clone the repository
git clone https://github.com/ddecoen/multi_year_revrec.git
cd multi_year_revrec

# Start local server
python3 -m http.server 8000
# Or use any static file server

# Open in browser
open http://localhost:8000
```

## Files Structure

```
multi_year_revrec/
├── index.html          # Main application interface
├── styles.css          # Professional styling
├── script.js           # Revenue calculation logic
├── README.md           # This file
├── DEPLOYMENT.md       # Vercel deployment guide
├── demo.md             # Usage examples
└── vercel.json         # Vercel configuration
```

## Technical Details

- **Frontend**: Pure HTML, CSS, JavaScript (no frameworks)
- **Responsive**: Mobile-friendly design
- **Browser Support**: Modern browsers (ES6+)
- **Hosting**: Static site compatible (Vercel, Netlify, GitHub Pages)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use for commercial or personal projects.

---

**Ready to deploy?** See [`DEPLOYMENT.md`](DEPLOYMENT.md) for step-by-step instructions!
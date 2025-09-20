class RevenueCalculator {
    constructor() {
        this.form = document.getElementById('revenueForm');
        this.resultsSection = document.getElementById('results');
        this.outputInputs = document.getElementById('outputInputs');
        this.inputInputs = document.getElementById('inputInputs');
        this.unitsPerYearDiv = document.getElementById('unitsPerYear');
        this.costsPerYearDiv = document.getElementById('costsPerYear');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Method selection change
        document.querySelectorAll('input[name="recognitionMethod"]').forEach(radio => {
            radio.addEventListener('change', () => this.toggleMethodInputs());
        });

        // Contract term change to generate year inputs
        document.getElementById('contractTerm').addEventListener('input', () => {
            this.generateYearInputs();
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateRevenue();
        });

        // Form reset
        this.form.addEventListener('reset', () => {
            setTimeout(() => {
                this.resultsSection.style.display = 'none';
                this.generateYearInputs();
            }, 100);
        });
    }

    toggleMethodInputs() {
        const selectedMethod = document.querySelector('input[name="recognitionMethod"]:checked').value;
        
        if (selectedMethod === 'output') {
            this.outputInputs.style.display = 'block';
            this.inputInputs.style.display = 'none';
        } else {
            this.outputInputs.style.display = 'none';
            this.inputInputs.style.display = 'block';
        }
        
        this.generateYearInputs();
    }

    generateYearInputs() {
        const contractTerm = parseInt(document.getElementById('contractTerm').value) || 0;
        const selectedMethod = document.querySelector('input[name="recognitionMethod"]:checked').value;
        
        if (contractTerm <= 0) return;
        
        if (selectedMethod === 'output') {
            this.generateUnitsInputs(contractTerm);
        } else {
            this.generateCostsInputs(contractTerm);
        }
    }

    generateUnitsInputs(contractTerm) {
        this.unitsPerYearDiv.innerHTML = '';
        
        for (let year = 1; year <= contractTerm; year++) {
            const yearDiv = document.createElement('div');
            yearDiv.className = 'year-input';
            yearDiv.innerHTML = `
                <label>Year ${year}:</label>
                <input type="number" id="unitsYear${year}" min="0" placeholder="Units delivered in year ${year}">
            `;
            this.unitsPerYearDiv.appendChild(yearDiv);
        }
    }

    generateCostsInputs(contractTerm) {
        this.costsPerYearDiv.innerHTML = '';
        
        for (let year = 1; year <= contractTerm; year++) {
            const yearDiv = document.createElement('div');
            yearDiv.className = 'year-input';
            yearDiv.innerHTML = `
                <label>Year ${year}:</label>
                <input type="number" id="costsYear${year}" min="0" step="0.01" placeholder="Costs incurred in year ${year}">
            `;
            this.costsPerYearDiv.appendChild(yearDiv);
        }
    }

    validateInputs() {
        const totalTransactionPrice = parseFloat(document.getElementById('totalTransactionPrice').value);
        const contractTerm = parseInt(document.getElementById('contractTerm').value);
        const day1Delivery = parseFloat(document.getElementById('day1Delivery').value) || 0;
        
        if (!totalTransactionPrice || totalTransactionPrice <= 0) {
            throw new Error('Please enter a valid total transaction price');
        }
        
        if (!contractTerm || contractTerm <= 0) {
            throw new Error('Please enter a valid contract term');
        }
        
        if (day1Delivery > totalTransactionPrice) {
            throw new Error('Day 1 delivery amount cannot exceed total transaction price');
        }
        
        const selectedMethod = document.querySelector('input[name="recognitionMethod"]:checked').value;
        
        if (selectedMethod === 'output') {
            const totalUnits = parseFloat(document.getElementById('totalUnits').value);
            if (!totalUnits || totalUnits <= 0) {
                throw new Error('Please enter total units to be delivered');
            }
            
            let totalUnitsEntered = 0;
            for (let year = 1; year <= contractTerm; year++) {
                const units = parseFloat(document.getElementById(`unitsYear${year}`).value) || 0;
                totalUnitsEntered += units;
            }
            
            if (totalUnitsEntered > totalUnits) {
                throw new Error('Total units entered across years cannot exceed total units to be delivered');
            }
        } else {
            const totalCosts = parseFloat(document.getElementById('totalCosts').value);
            if (!totalCosts || totalCosts <= 0) {
                throw new Error('Please enter total expected costs');
            }
            
            let totalCostsEntered = 0;
            for (let year = 1; year <= contractTerm; year++) {
                const costs = parseFloat(document.getElementById(`costsYear${year}`).value) || 0;
                totalCostsEntered += costs;
            }
            
            if (totalCostsEntered > totalCosts) {
                throw new Error('Total costs entered across years cannot exceed total expected costs');
            }
        }
        
        return { totalTransactionPrice, contractTerm, day1Delivery };
    }

    calculateRevenue() {
        try {
            const { totalTransactionPrice, contractTerm, day1Delivery } = this.validateInputs();
            const selectedMethod = document.querySelector('input[name="recognitionMethod"]:checked').value;
            
            const remainingAmount = totalTransactionPrice - day1Delivery;
            let schedule = [];
            
            if (selectedMethod === 'output') {
                schedule = this.calculateOutputMethod(contractTerm, remainingAmount);
            } else {
                schedule = this.calculateInputMethod(contractTerm, remainingAmount);
            }
            
            this.displayResults(day1Delivery, remainingAmount, schedule);
            
        } catch (error) {
            alert(error.message);
        }
    }

    calculateOutputMethod(contractTerm, remainingAmount) {
        const totalUnits = parseFloat(document.getElementById('totalUnits').value);
        const schedule = [];
        let cumulativeRevenue = 0;
        let cumulativeUnits = 0;
        
        for (let year = 1; year <= contractTerm; year++) {
            const unitsDelivered = parseFloat(document.getElementById(`unitsYear${year}`).value) || 0;
            cumulativeUnits += unitsDelivered;
            
            const progressPercentage = (cumulativeUnits / totalUnits) * 100;
            const totalRevenueToRecognize = (cumulativeUnits / totalUnits) * remainingAmount;
            const yearRevenue = totalRevenueToRecognize - cumulativeRevenue;
            cumulativeRevenue += yearRevenue;
            
            schedule.push({
                year: year,
                progress: Math.min(progressPercentage, 100),
                revenue: yearRevenue,
                cumulative: cumulativeRevenue
            });
        }
        
        return schedule;
    }

    calculateInputMethod(contractTerm, remainingAmount) {
        const totalCosts = parseFloat(document.getElementById('totalCosts').value);
        const schedule = [];
        let cumulativeRevenue = 0;
        let cumulativeCosts = 0;
        
        for (let year = 1; year <= contractTerm; year++) {
            const costsIncurred = parseFloat(document.getElementById(`costsYear${year}`).value) || 0;
            cumulativeCosts += costsIncurred;
            
            const progressPercentage = (cumulativeCosts / totalCosts) * 100;
            const totalRevenueToRecognize = (cumulativeCosts / totalCosts) * remainingAmount;
            const yearRevenue = totalRevenueToRecognize - cumulativeRevenue;
            cumulativeRevenue += yearRevenue;
            
            schedule.push({
                year: year,
                progress: Math.min(progressPercentage, 100),
                revenue: yearRevenue,
                cumulative: cumulativeRevenue
            });
        }
        
        return schedule;
    }

    displayResults(day1Amount, remainingAmount, schedule) {
        // Update summary
        document.getElementById('day1Amount').textContent = this.formatCurrency(day1Amount);
        document.getElementById('remainingAmount').textContent = this.formatCurrency(remainingAmount);
        
        // Update schedule table
        const tableBody = document.getElementById('scheduleBody');
        tableBody.innerHTML = '';
        
        schedule.forEach(item => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${item.year}</td>
                <td class="percentage">${item.progress.toFixed(2)}%</td>
                <td class="currency">${this.formatCurrency(item.revenue)}</td>
                <td class="currency">${this.formatCurrency(item.cumulative)}</td>
            `;
        });
        
        // Show results section
        this.resultsSection.style.display = 'block';
        this.resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RevenueCalculator();
});
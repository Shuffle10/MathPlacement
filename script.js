function calculatePlacement() {
    const actMath = parseInt(document.getElementById('act-math').value);
    const satMath = parseInt(document.getElementById('sat-math').value);
    const accuplacerQras = parseInt(document.getElementById('accuplacer-qras').value);
    const accuplacerAaf = parseInt(document.getElementById('accuplacer-aaf').value);
    const gpa = parseFloat(document.getElementById('gpa').value);
    
    let result = '';

    if (gpa >= 3.0 || satMath >= 510 || accuplacerQras >= 250) {
        if (actMath) {
            if (actMath < 19) {
                result = 'MATH 103B/C: Applied Algebra (less rigorous than college algebra).';
            } else if (actMath >= 19 && actMath <= 21) {
                result = 'MATH 100B/C or MATH 103B/C: College Algebra or Applied Algebra with additional instructional hours.';
            } else if (actMath >= 22 && actMath <= 23) {
                result = 'MATH 101 or MATH 102: College Algebra or Applied Algebra.';
            } else if (actMath >= 24 && actMath <= 25) {
                result = 'MATH 101, MATH 102, or Eligible for MATH 101 Credit Exam. Passing the 101 redit exam will place you in Pre-Calculus.';
            } else if (actMath >= 26) {
                result = 'Credit granted MATH 101 and eligible to in MATH 112, MATH 125, MATH 130, MATH 240 (Pre-Calculus), or STAT 200.';
            }
        } else if (satMath) {
            if (satMath < 510) {
                result = 'MATH 103B/C: Applied Algebra (less rigorous than college algebra).';
            } else if (satMath >= 510 && satMath <= 530) {
                result = 'MATH 100B/C or MATH 103B/C: College Algebra or Applied Algebra with additional instructional hours.';
            } else if (satMath >= 540 && satMath <= 570) {
                result = 'MATH 101 or MATH 102: College Algebra or Applied Algebra.';
            } else if (satMath >= 580 && satMath <= 600) {
                result = 'MATH 101, MATH 102, or Eligible for MATH 101 Credit Exam.  Passing the 101 redit exam will place you in Pre-Calculus.';
            } else if (satMath >= 610) {
                result = 'Credit granted MATH 101 and eligible to in MATH 112, MATH 125, MATH 130, MATH 240 (Pre-Calculus), or STAT 200.';
            }
        } else if (accuplacerQras) {
            if (accuplacerQras >= 200 && accuplacerQras <= 262) {
                result = 'MATH 103B/C: Applied Algebra (less rigorous than college algebra).';
            } else if (accuplacerQras >= 263 && accuplacerQras <= 275) {
                result = 'MATH 100B/C or MATH 103B/C: College Algebra or Applied Algebra with additional instructional hours.';
            } else if (accuplacerQras >= 276 && accuplacerQras <= 288) {
                result = 'MATH 101 or MATH 102: College Algebra or Applied Algebra.';
            } else if (accuplacerQras >= 289) {
                result = 'MATH 101, MATH 102, or Eligible for MATH 101 Credit Exam.  Passing the 101 redit exam will place you in Pre-Calculus.';
            }
        } else if (accuplacerAaf) {
            if (accuplacerAaf >= 250 && accuplacerAaf <= 262) {
                result = 'MATH 100B/C or MATH 103B/C: College Algebra or Applied Algebra with additional instructional hours.';
            } else if (accuplacerAaf >= 263 && accuplacerAaf <= 275) {
                result = 'MATH 101 or MATH 102: College Algebra or Applied Algebra.';
            } else if (accuplacerAaf >= 276) {
                result = 'MATH 101, MATH 102, or Eligible for MATH 101 Credit Exam. Passing the 101 redit exam will place you in Pre-Calculus.';
            }
        } else if (gpa >= 3.0) {
            result = 'MATH 102: Applied Algebra.';
        } else {
            result = 'Please check with your advisor for accurate placement.';
        }
    } else {
        result = 'You do not meet the admission requirements.';
    }
    
    document.getElementById('result').innerHTML = `Placement: ${result}`;
    document.getElementById('result').style.display = "block"

}

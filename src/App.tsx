import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Printer, Home, Info, Target, Clock, DollarSign, Users, FileText, AlertTriangle, BookOpen, CheckSquare, ArrowRight } from 'lucide-react';

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const totalSlides = 17;

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                prevSlide();
            } else if (e.key === 'Home') {
                setCurrentSlide(0);
            } else if (e.key === 'End') {
                setCurrentSlide(totalSlides - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1 && !transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentSlide(currentSlide + 1);
                setTransitioning(false);
            }, 300);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0 && !transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentSlide(currentSlide - 1);
                setTransitioning(false);
            }, 300);
        }
    };

    const goToSlide = (index) => {
        if (index !== currentSlide && !transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentSlide(index);
                setTransitioning(false);
            }, 300);
        }
    };

    const printPresentation = () => {
        window.print();
    };

    // Slide content
    const slides = [
        // Slide 1: Cover
        <div key="slide-1" className="flex flex-col items-center justify-center text-center h-full">
            <h1 className="text-5xl font-bold text-blue-600 mb-4">INCLUSÃO DIGITAL DOS IDOSOS</h1>
            <h2 className="text-3xl text-blue-500 mb-8 italic">Inclusão digital na terceira idade</h2>

            <div className="my-8 text-xl">
                <p className="mb-2"><strong>Autores:</strong> Joel de Ariovaldo Romão, Mendonça Everssone Jaime</p>
                <p className="mb-2"><strong>Orientador:</strong> Harold Chate</p>
                <p className="mb-2"><strong>Curso:</strong> Engenharia Informática</p>
                <p className="mb-2"><strong>Faculdade de Ciências e Tecnologias</strong></p>
                <p className="mb-2"><strong>Beira, 2025</strong></p>
            </div>

            <div className="text-7xl mt-4 animate-bounce">👵🏾👨🏾‍🦳 💻 📱</div>
        </div>,

        // Slide 2: Introduction
        <div key="slide-2" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <Info className="inline-block mr-3" size={36} />
                INTRODUÇÃO
            </h2>

            <ul className="space-y-6 text-xl">
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="mr-3 text-blue-500 text-2xl">🌐</div>
                    <div>
                        <strong className="text-blue-600">Contexto:</strong> Necessidade de conectar idosos ao mundo digital
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="mr-3 text-blue-500 text-2xl">✅</div>
                    <div>
                        <strong className="text-blue-600">Benefícios:</strong> Operações bancárias, comunicação, redes sociais, informações sobre saúde
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="mr-3 text-blue-500 text-2xl">📈</div>
                    <div>
                        <strong className="text-blue-600">Impacto:</strong> Aumento da interação social, independência e redução da solidão
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="mr-3 text-blue-500 text-2xl">🚧</div>
                    <div>
                        <strong className="text-blue-600">Desafio:</strong> Limitações físicas, cognitivas e preconceito social
                    </div>
                </li>
            </ul>
        </div>,

        // Slide 3: Justification
        <div key="slide-3" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <FileText className="inline-block mr-3" size={36} />
                JUSTIFICATIVA
            </h2>

            <ul className="space-y-6 text-xl">
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="mr-3 text-blue-500 text-2xl">⛔</div>
                    <div>
                        <strong className="text-blue-600">Exclusão social:</strong> Preconceito e isolamento dos idosos
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="mr-3 text-blue-500 text-2xl">💡</div>
                    <div>
                        <strong className="text-blue-600">Tecnologia como solução:</strong> Melhoria da qualidade de vida
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="mr-3 text-blue-500 text-2xl">⚖️</div>
                    <div>
                        <strong className="text-blue-600">Direito garantido:</strong> Estatuto do Idoso assegura acesso à educação tecnológica
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="mr-3 text-blue-500 text-2xl">👨‍👩‍👧‍👦</div>
                    <div>
                        <strong className="text-blue-600">Benefícios comprovados:</strong> Melhorias na participação familiar e comunitária
                    </div>
                </li>
            </ul>
        </div>,

        // Slide 4: Problem
        <div key="slide-4" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <AlertTriangle className="inline-block mr-3" size={36} />
                PROBLEMA
            </h2>

            <h3 className="text-2xl text-blue-500 mb-4">Principais desafios identificados:</h3>

            <ul className="space-y-6 text-xl">
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="mr-3 text-blue-500 text-2xl">🔄</div>
                    <div>Dificuldades com avanços tecnológicos</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="mr-3 text-blue-500 text-2xl">📱</div>
                    <div>Afastamento de dispositivos básicos (celulares, caixas eletrônicos)</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="mr-3 text-blue-500 text-2xl">💬</div>
                    <div>Limitação na socialização e comunicação</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="mr-3 text-blue-500 text-2xl">🎓</div>
                    <div>Falta de programas adequados para a terceira idade</div>
                </li>
            </ul>
        </div>,

        // Slide 5: General Objective
        <div key="slide-5" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <Target className="inline-block mr-3" size={36} />
                OBJETIVO GERAL
            </h2>

            <div className="mb-8 text-xl bg-blue-100 p-4 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105">
                <strong className="text-blue-700">Analisar o processo de aprendizagem de e-inclusão da Terceira Idade</strong>
            </div>

            <h3 className="text-2xl text-blue-500 mb-4">Objetivos Específicos:</h3>

            <ul className="space-y-4 text-xl">
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="mr-3 text-blue-500">🎯</div>
                    <div>Demonstrar a importância da inclusão digital e social</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="mr-3 text-blue-500">🎯</div>
                    <div>Capacitar idosos através de oficinas de inclusão digital</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="mr-3 text-blue-500">🎯</div>
                    <div>Promover a auto valorização dos idosos</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="mr-3 text-blue-500">🎯</div>
                    <div>Facilitar integração na "sociedade da informação"</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-400">
                    <div className="mr-3 text-blue-500">🎯</div>
                    <div>Fomentar o aprendizado contínuo</div>
                </li>
            </ul>
        </div>,

        // Slide 6: Methodology
        <div key="slide-6" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <BookOpen className="inline-block mr-3" size={36} />
                METODOLOGIA - DICAS DE ENSINO
            </h2>

            <ol className="space-y-4 text-xl">
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="mr-3 text-blue-500 font-bold">1.</div>
                    <div><strong className="text-blue-600">Aproveitar conhecimentos prévios</strong> (comparar com conceitos familiares)</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="mr-3 text-blue-500 font-bold">2.</div>
                    <div><strong className="text-blue-600">Explicar relevância</strong> antes dos detalhes técnicos</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="mr-3 text-blue-500 font-bold">3.</div>
                    <div><strong className="text-blue-600">Usar linguagem simples</strong> (evitar termos técnicos)</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="mr-3 text-blue-500 font-bold">4.</div>
                    <div><strong className="text-blue-600">Ritmo adequado</strong> com pausas para processamento</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-400">
                    <div className="mr-3 text-blue-500 font-bold">5.</div>
                    <div><strong className="text-blue-600">Repetição de conceitos</strong> principais</div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-500">
                    <div className="mr-3 text-blue-500 font-bold">6.</div>
                    <div><strong className="text-blue-600">Momentos para perguntas</strong></div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-600">
                    <div className="mr-3 text-blue-500 font-bold">7.</div>
                    <div><strong className="text-blue-600">Permitir resolução independente</strong> de problemas</div>
                </li>
            </ol>
        </div>,

        // Slide 7: Project Scope
        <div key="slide-7" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <Target className="inline-block mr-3" size={36} />
                ESCOPO DO PROJETO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="transition-all duration-500 transform translate-x-0 opacity-100">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <CheckSquare className="inline-block mr-2" size={24} />
                        Entregas:
                    </h3>

                    <ul className="space-y-3 text-xl">
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Curso de Inclusão Digital completo</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Material didático (apostilas e manuais)</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Aulas práticas em laboratório</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Suporte técnico e emocional</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Avaliação e certificação</div>
                        </li>
                    </ul>
                </div>

                <div className="transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <AlertTriangle className="inline-block mr-2" size={24} />
                        Limitações:
                    </h3>

                    <ul className="space-y-3 text-xl">
                        <li className="flex items-center">
                            <div className="mr-2 text-amber-600">⚠️</div>
                            <div>Público-alvo específico (idosos)</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-amber-600">⚠️</div>
                            <div>Recursos financeiros e humanos limitados</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-amber-600">⚠️</div>
                            <div>Foco em habilidades básicas</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-amber-600">⚠️</div>
                            <div>Cronograma definido</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>,

        // Slide 8: Timeline
        <div key="slide-8" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <Clock className="inline-block mr-3" size={36} />
                CRONOGRAMA (6 MESES)
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">Fase</th>
                        <th className="py-3 px-4 text-left">Duração</th>
                        <th className="py-3 px-4 text-left">Atividades Principais</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b border-gray-200 transition-all duration-500 transform translate-x-0 opacity-100">
                        <td className="py-3 px-4 font-medium">Planejamento</td>
                        <td className="py-3 px-4">Mês 1</td>
                        <td className="py-3 px-4">Definição de metas, recursos, parcerias</td>
                    </tr>
                    <tr className="border-b border-gray-200 transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                        <td className="py-3 px-4 font-medium">Preparação</td>
                        <td className="py-3 px-4">Mês 2</td>
                        <td className="py-3 px-4">Treinamento, equipamentos, material didático</td>
                    </tr>
                    <tr className="border-b border-gray-200 transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                        <td className="py-3 px-4 font-medium">Execução</td>
                        <td className="py-3 px-4">Meses 3-5</td>
                        <td className="py-3 px-4">4 módulos de ensino progressivo</td>
                    </tr>
                    <tr className="transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                        <td className="py-3 px-4 font-medium">Encerramento</td>
                        <td className="py-3 px-4">Mês 6</td>
                        <td className="py-3 px-4">Avaliação, certificação, relatório final</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-6 flex justify-center">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md inline-flex items-center transition-all duration-300 transform hover:scale-105">
                    <Clock className="text-blue-500 mr-2" size={24} />
                    <span className="text-xl font-medium">Duração total: 6 meses</span>
                </div>
            </div>
        </div>,

        // Slide 9: Budget
        <div key="slide-9" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <DollarSign className="inline-block mr-3" size={36} />
                ORÇAMENTO
            </h2>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6 transition-all duration-500 transform hover:scale-105">
                <p className="text-2xl font-bold text-center">Investimento Total: 95.500,00 Mt</p>
            </div>

            <h3 className="text-2xl text-blue-500 mb-4">Principais categorias:</h3>

            <ul className="space-y-4 text-xl">
                <li className="flex items-center justify-between transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="flex items-center">
                        <div className="mr-3 text-blue-500">👥</div>
                        <div><strong>Recursos Humanos:</strong></div>
                    </div>
                    <div className="text-green-600 font-medium">31.500,00 Mt (33%)</div>
                </li>
                <li className="flex items-center justify-between transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="flex items-center">
                        <div className="mr-3 text-blue-500">🖥️</div>
                        <div><strong>Equipamentos:</strong></div>
                    </div>
                    <div className="text-green-600 font-medium">38.000,00 Mt (40%)</div>
                </li>
                <li className="flex items-center justify-between transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="flex items-center">
                        <div className="mr-3 text-blue-500">🏢</div>
                        <div><strong>Infraestrutura:</strong></div>
                    </div>
                    <div className="text-green-600 font-medium">15.000,00 Mt (16%)</div>
                </li>
                <li className="flex items-center justify-between transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="flex items-center">
                        <div className="mr-3 text-blue-500">📚</div>
                        <div><strong>Material Didático:</strong></div>
                    </div>
                    <div className="text-green-600 font-medium">3.000,00 Mt (3%)</div>
                </li>
                <li className="flex items-center justify-between transition-all duration-500 transform translate-x-0 opacity-100 delay-400">
                    <div className="flex items-center">
                        <div className="mr-3 text-blue-500">📦</div>
                        <div><strong>Outros:</strong></div>
                    </div>
                    <div className="text-green-600 font-medium">8.000,00 Mt (8%)</div>
                </li>
            </ul>
        </div>,

        // Slide 10: Required Resources
        <div key="slide-10" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <Users className="inline-block mr-3" size={36} />
                RECURSOS NECESSÁRIOS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <Users className="inline-block mr-2" size={24} />
                        Humanos:
                    </h3>

                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">👨‍🏫</div>
                            <div>2-3 instrutores qualificados</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">👨‍💼</div>
                            <div>1 coordenador de projeto</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">🙋‍♀️</div>
                            <div>5-10 voluntários de apoio</div>
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-100">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <div className="inline-block mr-2 text-2xl">💻</div>
                        Tecnológicos:
                    </h3>

                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">🖥️</div>
                            <div>10 computadores</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">📱</div>
                            <div>10 tablets</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">📱</div>
                            <div>10 smartphones</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">🖨️</div>
                            <div>1 impressora</div>
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-200">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <div className="inline-block mr-2 text-2xl">🏢</div>
                        Infraestrutura:
                    </h3>

                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">🏫</div>
                            <div>Sala de aula equipada</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">📶</div>
                            <div>Conexão Wi-Fi estável</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>,

        // Slide 11: Main Risks and Mitigations
        <div key="slide-11" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <AlertTriangle className="inline-block mr-3" size={36} />
                PRINCIPAIS RISCOS E MITIGAÇÕES
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">Risco</th>
                        <th className="py-3 px-4 text-left">Mitigação</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b border-gray-200 transition-all duration-500 transform translate-x-0 opacity-100">
                        <td className="py-3 px-4 font-medium flex items-center">
                            <div className="text-red-500 mr-2">⚠️</div>
                            Baixa adesão
                        </td>
                        <td className="py-3 px-4">Campanhas de sensibilização</td>
                    </tr>
                    <tr className="border-b border-gray-200 transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                        <td className="py-3 px-4 font-medium flex items-center">
                            <div className="text-red-500 mr-2">⚠️</div>
                            Dificuldades de aprendizado
                        </td>
                        <td className="py-3 px-4">Ensino personalizado e ritmo lento</td>
                    </tr>
                    <tr className="border-b border-gray-200 transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                        <td className="py-3 px-4 font-medium flex items-center">
                            <div className="text-red-500 mr-2">⚠️</div>
                            Problemas técnicos
                        </td>
                        <td className="py-3 px-4">Suporte técnico disponível</td>
                    </tr>
                    <tr className="border-b border-gray-200 transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                        <td className="py-3 px-4 font-medium flex items-center">
                            <div className="text-red-500 mr-2">⚠️</div>
                            Recursos insuficientes
                        </td>
                        <td className="py-3 px-4">Parcerias e patrocínios</td>
                    </tr>
                    <tr className="transition-all duration-500 transform translate-x-0 opacity-100 delay-400">
                        <td className="py-3 px-4 font-medium flex items-center">
                            <div className="text-red-500 mr-2">⚠️</div>
                            Desmotivação
                        </td>
                        <td className="py-3 px-4">Conteúdo relevante e prático</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>,

        // Slide 12: Stakeholders
        <div key="slide-12" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <Users className="inline-block mr-3" size={36} />
                PARTES INTERESSADAS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <div className="inline-block mr-2 text-2xl">👵🏾👨🏾‍🦳</div>
                        Beneficiários Diretos:
                    </h3>

                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Idosos participantes</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Familiares dos idosos</div>
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-100">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <div className="inline-block mr-2 text-2xl">👨‍🏫</div>
                        Executores:
                    </h3>

                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Instrutores e voluntários</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Coordenador do projeto</div>
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-200">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <div className="inline-block mr-2 text-2xl">🤝</div>
                        Apoiadores:
                    </h3>

                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Parceiros e patrocinadores</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Instituições de ensino</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Governo local</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-blue-500">✓</div>
                            <div>Comunidade em geral</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>,

        // Slide 13: Course Modules
        <div key="slide-13" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <BookOpen className="inline-block mr-3" size={36} />
                MÓDULOS DO CURSO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105">
                    <h3 className="text-xl text-blue-600 mb-3 flex items-center">
                        <div className="inline-block mr-2 text-xl">🖥️</div>
                        Módulo 1:
                    </h3>
                    <p className="text-lg">Introdução ao uso de computadores e smartphones</p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-100">
                    <h3 className="text-xl text-blue-600 mb-3 flex items-center">
                        <div className="inline-block mr-2 text-xl">🌐</div>
                        Módulo 2:
                    </h3>
                    <p className="text-lg">Navegação na internet e redes sociais</p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-200">
                    <h3 className="text-xl text-blue-600 mb-3 flex items-center">
                        <div className="inline-block mr-2 text-xl">📱</div>
                        Módulo 3:
                    </h3>
                    <p className="text-lg">Aplicativos úteis (banco, saúde, compras online)</p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-300">
                    <h3 className="text-xl text-blue-600 mb-3 flex items-center">
                        <div className="inline-block mr-2 text-xl">🔒</div>
                        Módulo 4:
                    </h3>
                    <p className="text-lg">Segurança digital e boas práticas</p>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md inline-flex items-center transition-all duration-300 transform hover:scale-105">
                    <Clock className="text-blue-500 mr-2" size={24} />
                    <span className="text-xl font-medium">Duração: 3 semanas por módulo com aulas práticas</span>
                </div>
            </div>
        </div>,

        // Slide 14: Expected Results
        <div key="slide-14" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <CheckSquare className="inline-block mr-3" size={36} />
                RESULTADOS ESPERADOS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="transition-all duration-500 transform translate-x-0 opacity-100">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <div className="inline-block mr-2 text-2xl">👵🏾👨🏾‍🦳</div>
                        Para os Idosos:
                    </h3>

                    <ul className="space-y-3 text-xl">
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Maior independência digital</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Melhor comunicação com familiares</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Acesso facilitado a serviços</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Redução do isolamento social</div>
                        </li>
                    </ul>
                </div>

                <div className="transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <h3 className="text-2xl text-blue-500 mb-4 flex items-center">
                        <div className="inline-block mr-2 text-2xl">🌍</div>
                        Para a Sociedade:
                    </h3>

                    <ul className="space-y-3 text-xl">
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Inclusão social da terceira idade</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Redução da exclusão digital</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Fortalecimento de vínculos familiares</div>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-2 text-green-600">✓</div>
                            <div>Comunidade mais conectada</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>,

        // Slide 15: Final Considerations
        <div key="slide-15" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <Info className="inline-block mr-3" size={36} />
                CONSIDERAÇÕES FINAIS
            </h2>

            <ul className="space-y-6 text-xl">
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="mr-3 text-blue-500 text-2xl">📱</div>
                    <div>
                        <strong className="text-blue-600">A inclusão digital é fundamental</strong> para preservar a autonomia dos idosos
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="mr-3 text-blue-500 text-2xl">🗣️</div>
                    <div>
                        <strong className="text-blue-600">A comunicação adequada</strong> fortalece a cooperação e relacionamentos
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="mr-3 text-blue-500 text-2xl">🤝</div>
                    <div>
                        <strong className="text-blue-600">O projeto promove</strong> não apenas habilidades técnicas, mas <strong className="text-blue-600">integração social</strong>
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="mr-3 text-blue-500 text-2xl">📈</div>
                    <div>
                        <strong className="text-blue-600">Impacto duradouro</strong> na qualidade de vida da terceira idade
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-400">
                    <div className="mr-3 text-blue-500 text-2xl">🔄</div>
                    <div>
                        <strong className="text-blue-600">Necessidade de continuidade</strong> e apoio contínuo pós-curso
                    </div>
                </li>
            </ul>
        </div>,

        // Slide 16: Next Steps
        <div key="slide-16" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
                <ArrowRight className="inline-block mr-3" size={36} />
                PRÓXIMOS PASSOS
            </h2>

            <ol className="space-y-4 text-xl">
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100">
                    <div className="mr-3 text-blue-500 font-bold">1.</div>
                    <div className="flex items-center">
                        <div className="mr-2 text-blue-500">🤝</div>
                        <div><strong className="text-blue-600">Busca de parcerias</strong> e financiamento</div>
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-100">
                    <div className="mr-3 text-blue-500 font-bold">2.</div>
                    <div className="flex items-center">
                        <div className="mr-2 text-blue-500">👨‍🏫</div>
                        <div><strong className="text-blue-600">Seleção e treinamento</strong> da equipe</div>
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-200">
                    <div className="mr-3 text-blue-500 font-bold">3.</div>
                    <div className="flex items-center">
                        <div className="mr-2 text-blue-500">💻</div>
                        <div><strong className="text-blue-600">Aquisição de equipamentos</strong> e material</div>
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-300">
                    <div className="mr-3 text-blue-500 font-bold">4.</div>
                    <div className="flex items-center">
                        <div className="mr-2 text-blue-500">📢</div>
                        <div><strong className="text-blue-600">Divulgação</strong> na comunidade</div>
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-400">
                    <div className="mr-3 text-blue-500 font-bold">5.</div>
                    <div className="flex items-center">
                        <div className="mr-2 text-blue-500">📝</div>
                        <div><strong className="text-blue-600">Início das inscrições</strong></div>
                    </div>
                </li>
                <li className="flex items-start transition-all duration-500 transform translate-x-0 opacity-100 delay-500">
                    <div className="mr-3 text-blue-500 font-bold">6.</div>
                    <div className="flex items-center">
                        <div className="mr-2 text-blue-500">🚀</div>
                        <div><strong className="text-blue-600">Implementação piloto</strong></div>
                    </div>
                </li>
            </ol>
        </div>,

        // Slide 17: Contact
        <div key="slide-17" className="h-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-8 flex items-center">
                <div className="inline-block mr-3 text-4xl">📞</div>
                CONTATO
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8 transition-all duration-500 transform hover:scale-105">
                <h3 className="text-2xl text-blue-500 mb-4">Equipe do Projeto:</h3>
                <ul className="space-y-3 text-xl">
                    <li className="flex items-center">
                        <div className="mr-2 text-blue-500">👨🏾‍💻</div>
                        <div>Joel de Ariovaldo Romão</div>
                    </li>
                    <li className="flex items-center">
                        <div className="mr-2 text-blue-500">👨🏾‍💻</div>
                        <div>Mendonça Everssone Jaime</div>
                    </li>
                </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8 transition-all duration-500 transform hover:scale-105 delay-100">
                <h3 className="text-2xl text-blue-500 mb-4">Orientador:</h3>
                <div className="flex items-center text-xl">
                    <div className="mr-2 text-blue-500">👨🏾‍🏫</div>
                    <div>Harold Chate</div>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105 delay-200">
                <h3 className="text-2xl text-blue-500 mb-4">Instituição:</h3>
                <ul className="space-y-3 text-xl">
                    <li className="flex items-center">
                        <div className="mr-2 text-blue-500">🏢</div>
                        <div>Faculdade de Ciências e Tecnologias</div>
                    </li>
                    <li className="flex items-center">
                        <div className="mr-2 text-blue-500">🎓</div>
                        <div>Curso: Engenharia Informática</div>
                    </li>
                    <li className="flex items-center">
                        <div className="mr-2 text-blue-500">📍</div>
                        <div>Localização: Beira, Moçambique</div>
                    </li>
                </ul>
            </div>
        </div>
    ];

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans print:bg-white">
            {/* Print styles */}
            <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .print-hide { display: none !important; }
          .slide-container { page-break-after: always; height: 100vh; margin: 0; padding: 0; }
          body { margin: 0; padding: 0; }
          .slide-content { transform: none !important; opacity: 1 !important; }
        }
      `}} />

            {/* Header */}
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center print-hide">
                <h1 className="text-xl font-bold">INCLUSÃO DIGITAL DOS IDOSOS</h1>
                <div className="flex space-x-3">
                    <button
                        onClick={printPresentation}
                        className="flex items-center bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition-colors"
                    >
                        <Printer size={18} className="mr-1" />
                        <span>Imprimir</span>
                    </button>
                </div>
            </header>

            {/* Main content */}
            <main className="container mx-auto px-4 py-6">
                {/* Slide container */}
                <div className="slide-container bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Current slide */}
                    <div
                        className={`slide-content p-8 h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)] overflow-auto transition-all duration-300 ease-in-out ${
                            transitioning ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
                        }`}
                    >
                        {slides[currentSlide]}
                    </div>

                    {/* Navigation controls */}
                    <div className="bg-gray-100 p-4 flex justify-between items-center print-hide">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => goToSlide(0)}
                                className="p-2 rounded-full hover:bg-blue-100 transition-colors"
                                aria-label="Go to first slide"
                            >
                                <Home size={20} />
                            </button>
                            <button
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                                className={`p-2 rounded-full transition-colors ${
                                    currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-blue-100'
                                }`}
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={20} />
                            </button>
                        </div>

                        <div className="text-sm font-medium">
                            Slide {currentSlide + 1} / {totalSlides}
                        </div>

                        <button
                            onClick={nextSlide}
                            disabled={currentSlide === totalSlides - 1}
                            className={`p-2 rounded-full transition-colors ${
                                currentSlide === totalSlides - 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-blue-100'
                            }`}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Slide thumbnails */}
                <div className="mt-6 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 print-hide">
                    {slides.map((_, index) => (
                        <button
                            key={`thumb-${index}`}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-4 hover:bg-blue-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}